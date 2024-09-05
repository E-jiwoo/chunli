import cv2 as cv
import mediapipe as pipe
import pyautogui as gui

# FaceMesh
face_landmarks = pipe.solutions.face_mesh.FaceMesh(refine_landmarks=True)  # 얼굴의 랜드마크 검출 모델 초기화
# 웹캠
cam = cv.VideoCapture(0)
# 화면 크기
screen_w, screen_h = gui.size()
# 클릭 트리거
click_trg = 0

while True:
    # 캠 읽기
    a, img = cam.read()
    # 이미지 좌우 대칭
    img = cv.flip(img, 1)
    window_h, window_w, _ = img.shape
    rgb_img = cv.cvtColor(img, cv.COLOR_BGR2RGB)  # BGR -> RGB

    # 랜드마크 검출
    processed_image = face_landmarks.process(rgb_img)
    all_face_landmark_points = processed_image.multi_face_landmarks

    if all_face_landmark_points:
        # 첫 번째 얼굴의 랜드마크 포인트
        one_face_landmark_points = all_face_landmark_points[0].landmark

        # 랜드마크 좌표
        left_eye_x = int(one_face_landmark_points[145].x * window_w)
        left_eye_y = int(one_face_landmark_points[145].y * window_h)
        right_eye_x = int(one_face_landmark_points[374].x * window_w)
        right_eye_y = int(one_face_landmark_points[374].y * window_h)

        # 마우스 좌표로 변환
        mouse_x = int(one_face_landmark_points[145].x * screen_w)
        mouse_y = int(one_face_landmark_points[145].y * screen_h)

        # 마우스 포인터 이동
        gui.moveTo(mouse_x, mouse_y)
        print(f"Mouse coordinates: ({mouse_x}, {mouse_y})")  # 마우스 좌표 출력
        cv.circle(img, (left_eye_x, left_eye_y), 3, (0, 0, 255), -1)
        cv.circle(img, (right_eye_x, right_eye_y), 3, (0, 0, 255), -1)

        # 왼쪽 눈 감았을 때 마우스 클릭
        if (one_face_landmark_points[145].y - one_face_landmark_points[159].y < 0.01):
            click_trg += 1

        # 트리거로 마우스 클릭 나눔
        if click_trg == 5:
            gui.click()
            gui.sleep(2)
            print('clicked.')
            click_trg = 0

    cv.imshow("아이트레킹", img)
    if cv.waitKey(30) & 0xFF == 27:
        break

cam.release()
cv.destroyAllWindows()
