import cv2 as cv
import mediapipe as pipe
import json
import time

# JSON 파일 경로
json_file_path = 'eye_data.json'

# FaceMesh 초기화
face_landmarks = pipe.solutions.face_mesh.FaceMesh(refine_landmarks=True)
cam = cv.VideoCapture(0)

# 클릭 카운터 초기화
click_trg = 0
left_eye_closed_start_time = None  # 왼쪽 눈이 감기 시작한 시간
right_eye_closed_start_time = None  # 오른쪽 눈이 감기 시작한 시간
eye_closed_duration = 1  # 눈이 감아야 하는 시간 (초)

while True:
    a, img = cam.read()
    if not a:
        print("카메라에서 이미지를 읽을 수 없습니다.")
        break

    # 화면 반전 (미러 모드)
    img = cv.flip(img, 1)
    window_h, window_w, _ = img.shape

    # BGR 이미지를 RGB로 변환
    rgb_img = cv.cvtColor(img, cv.COLOR_BGR2RGB)

    # 얼굴 랜드마크 처리
    processed_image = face_landmarks.process(rgb_img)
    all_face_landmark_points = processed_image.multi_face_landmarks

    if all_face_landmark_points:
        one_face_landmark_points = all_face_landmark_points[0].landmark

        # 왼쪽 눈과 오른쪽 눈의 좌표
        left_eye_x = int(one_face_landmark_points[145].x * window_w)
        left_eye_y = int(one_face_landmark_points[145].y * window_h)
        right_eye_x = int(one_face_landmark_points[374].x * window_w)
        right_eye_y = int(one_face_landmark_points[374].y * window_h)

        
        left_eye_closed = (one_face_landmark_points[145].y - one_face_landmark_points[159].y < 0.02)  
        right_eye_closed = (one_face_landmark_points[374].y - one_face_landmark_points[386].y < 0.02)  

        if left_eye_closed:
            if left_eye_closed_start_time is None:
                left_eye_closed_start_time = time.time()  
        else:
            
            left_eye_closed_start_time = None  

        if right_eye_closed:
            if right_eye_closed_start_time is None:
                right_eye_closed_start_time = time.time()  
        else:
        
            right_eye_closed_start_time = None  

        if (left_eye_closed and left_eye_closed_start_time is not None and 
            time.time() - left_eye_closed_start_time >= eye_closed_duration):
            click_trg = 1
            print('왼쪽 눈 클릭 트리거 발생!')

        if (right_eye_closed and right_eye_closed_start_time is not None and 
            time.time() - right_eye_closed_start_time >= eye_closed_duration):
            click_trg = 1 
            print('오른쪽 눈 클릭 트리거 발생!')

        with open(json_file_path, 'w') as json_file:
            json.dump({'mouse_x': left_eye_x, 'mouse_y': left_eye_y, 'click_trg': click_trg}, json_file)

    cv.imshow("아이트레킹", img)

    if cv.waitKey(30) & 0xFF == 27:
        break

cam.release()
cv.destroyAllWindows()
