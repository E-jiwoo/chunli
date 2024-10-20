import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Menu_h from "./page/Menu_h/index";
import Menu_s from "./page/Menu_s/index";
import Start from "./page/Start/index";

function App() {
  const [eyeData, setEyeData] = useState({ mouse_x: 0, mouse_y: 0 });
  const mouseRef = useRef(null); // App.jsx의 요소를 참조하기 위한 ref

  useEffect(() => {
    const fetchEyeData = async () => {
      const response = await fetch('http://localhost:3001/eye_data.json'); // JSON 파일 경로
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
      const menuElement = document.querySelector('.menu-element'); // Menu_h의 요소 클래스명

      if (appElement && menuElement) {
        const appRect = appElement.getBoundingClientRect();
        const menuRect = menuElement.getBoundingClientRect();

        // 충돌 감지
        if (
          appRect.x < menuRect.x + menuRect.width &&
          appRect.x + appRect.width > menuRect.x &&
          appRect.y < menuRect.y + menuRect.height &&
          appRect.y + appRect.height > menuRect.y
        ) {
          console.log("Collision detected between App and Menu_h!");
          // 여기에 원하는 이벤트 로직을 추가하세요
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
          <Route path="/menu_s" element={<Menu_s />}></Route>
          <Route path="/menu_h" element={<Menu_h />}></Route>
        </Routes>
      </BrowserRouter>
      <div
        ref={mouseRef} // ref를 추가하여 App.jsx의 요소를 참조
        style={{
          position: 'absolute',
          top: eyeData.mouse_y,
          left: eyeData.mouse_x,
          width: '20px',
          height: '20px',
          backgroundColor: 'black', // 색상을 검은색으로 변경
          borderRadius: '50%',
          pointerEvents: 'none',
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
