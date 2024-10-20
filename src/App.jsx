import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Menu_h from "./page/Menu_h/index";
import Menu_s from "./page/Menu_s/index";
import Start from "./page/Start/index";

function App() {
  const [eyeData, setEyeData] = useState({ mouse_x: 0, mouse_y: 0 });
  const [arrowState1, setArrowState1] = useState(1); // arrowState1 상태 추가
  const [arrowState2, setArrowState2] = useState(1); // arrowState2 상태 추가
  const [arrowState3, setArrowState3] = useState(1); // arrowState3 상태 추가
  const [arrowState4, setArrowState4] = useState(1); // arrowState4 상태 추가
  const [arrowState5, setArrowState5] = useState(1); // arrowState5 상태 추가
  const [arrowState6, setArrowState6] = useState(1); // arrowState6 상태 추가
  const mouseRef = useRef(null); // App.jsx의 요소를 참조하기 위한 ref

  useEffect(() => {
    const fetchEyeData = async () => {
      const response = await fetch("http://localhost:3000/eye_data.json"); // JSON 파일 경로
      if (response.ok) {
        const data = await response.json();
        console.log("Received Eye Data:", data);
        setEyeData(data);
      } else {
        console.error("Failed to fetch eye data");
      }
    };

    const interval = setInterval(fetchEyeData, 100); // 100ms마다 데이터 요청
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      const appElement = mouseRef.current; // App.jsx의 요소
      const menuElement1 = document.querySelector(".menu-element"); // 첫 번째 메뉴 요소
      const menuElement2 = document.querySelector(".menu2-element"); // 두 번째 메뉴 요소
      const menuElement3 = document.querySelector(".menu3-element"); // 세 번째 메뉴 요소
      const menuElement4 = document.querySelector(".menu4-element"); // 네 번째 메뉴 요소
      const menuElement5 = document.querySelector(".menu5-element"); // 다섯 번째 메뉴 요소
      const menuElement6 = document.querySelector(".menu6-element"); // 여섯 번째 메뉴 요소

      // 충돌 감지: 메뉴 1
      if (appElement && menuElement1) {
        const appRect = appElement.getBoundingClientRect();
        const menuRect1 = menuElement1.getBoundingClientRect();

        if (
          appRect.x < menuRect1.x + menuRect1.width &&
          appRect.x + appRect.width > menuRect1.x &&
          appRect.y < menuRect1.y + menuRect1.height &&
          appRect.y + appRect.height > menuRect1.y
        ) {
          console.log("Collision detected between App and Menu Element 1!");
          setArrowState1(0);
        } else {
          setArrowState1(1);
        }
      }

      // 충돌 감지: 메뉴 2
      if (appElement && menuElement2) {
        const appRect2 = appElement.getBoundingClientRect();
        const menuRect2 = menuElement2.getBoundingClientRect();

        if (
          appRect2.x < menuRect2.x + menuRect2.width &&
          appRect2.x + appRect2.width > menuRect2.x &&
          appRect2.y < menuRect2.y + menuRect2.height &&
          appRect2.y + appRect2.height > menuRect2.y
        ) {
          console.log("Collision detected between App and Menu Element 2!");
          setArrowState2(0);
        } else {
          setArrowState2(1);
        }
      }

      // 충돌 감지: 메뉴 3
      if (appElement && menuElement3) {
        const appRect3 = appElement.getBoundingClientRect();
        const menuRect3 = menuElement3.getBoundingClientRect();

        if (
          appRect3.x < menuRect3.x + menuRect3.width &&
          appRect3.x + appRect3.width > menuRect3.x &&
          appRect3.y < menuRect3.y + menuRect3.height &&
          appRect3.y + appRect3.height > menuRect3.y
        ) {
          console.log("Collision detected between App and Menu Element 3!");
          setArrowState3(0);
        } else {
          setArrowState3(1);
        }
      }

      // 충돌 감지: 메뉴 4
      if (appElement && menuElement4) {
        const appRect4 = appElement.getBoundingClientRect();
        const menuRect4 = menuElement4.getBoundingClientRect();

        if (
          appRect4.x < menuRect4.x + menuRect4.width &&
          appRect4.x + appRect4.width > menuRect4.x &&
          appRect4.y < menuRect4.y + menuRect4.height &&
          appRect4.y + appRect4.height > menuRect4.y
        ) {
          console.log("Collision detected between App and Menu Element 4!");
          setArrowState4(0);
        } else {
          setArrowState4(1);
        }
      }

      // 충돌 감지: 메뉴 5
      if (appElement && menuElement5) {
        const appRect5 = appElement.getBoundingClientRect();
        const menuRect5 = menuElement5.getBoundingClientRect();

        if (
          appRect5.x < menuRect5.x + menuRect5.width &&
          appRect5.x + appRect5.width > menuRect5.x &&
          appRect5.y < menuRect5.y + menuRect5.height &&
          appRect5.y + appRect5.height > menuRect5.y
        ) {
          console.log("Collision detected between App and Menu Element 5!");
          setArrowState5(0);
        } else {
          setArrowState5(1);
        }
      }

      // 충돌 감지: 메뉴 6
      if (appElement && menuElement6) {
        const appRect6 = appElement.getBoundingClientRect();
        const menuRect6 = menuElement6.getBoundingClientRect();

        if (
          appRect6.x < menuRect6.x + menuRect6.width &&
          appRect6.x + appRect6.width > menuRect6.x &&
          appRect6.y < menuRect6.y + menuRect6.height &&
          appRect6.y + appRect6.height > menuRect6.y
        ) {
          console.log("Collision detected between App and Menu Element 6!");
          setArrowState6(0);
        } else {
          setArrowState6(1);
        }
      }
    };

    const interval = setInterval(checkCollision, 100); // 100ms마다 충돌 체크
    return () => clearInterval(interval);
  }, [mouseRef]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start eyeData={eyeData} />}></Route>
          <Route
            path="/menu_s"
            element={
              <Menu_s
                arrowState4={arrowState4}
                setArrowState4={setArrowState4}
                arrowState5={arrowState5}
                setArrowState5={setArrowState5}
                arrowState6={arrowState6}
                setArrowState6={setArrowState6}
              />
            }
          ></Route>
          <Route
            path="/menu_h"
            element={
              <Menu_h
                arrowState1={arrowState1}
                setArrowState1={setArrowState1}
                arrowState2={arrowState2}
                setArrowState2={setArrowState2}
                arrowState3={arrowState3}
                setArrowState3={setArrowState3}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <div
        ref={mouseRef} // ref를 추가하여 App.jsx의 요소를 참조
        style={{
          position: "absolute",
          top: eyeData.mouse_y,
          left: eyeData.mouse_x,
          width: "20px",
          height: "20px",
          backgroundColor: "black", // 색상을 검은색으로 변경
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: pretendard;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
`;

export default App;
