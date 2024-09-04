import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ff0000;
`;

export const Title = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 300;
  color: white;
  top: 185px;
  left: 70px;
`;

export const Name = styled.div`
  position: relative;
  font-size: 75px;
  font-weight: 700;
  color: white;
  top: 180px;
  left: 60px;
`;

export const Explan = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 300;
  color: white;
  top: 380px;
  left: 60px;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  animation: blink-effect 3s step-end infinite;
`;

export const TakeOut = styled.button`
  position: fixed;
  width: 320px;
  height: 65px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  top: 165px;
  left: 420px;
  color: #ff0000;
`;

export const TakeIn = styled.button`
  position: fixed;
  width: 320px;
  height: 65px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  top: 245px;
  left: 420px;
  color: #ff0000;
`;

export const Img = styled.img`
  position: relative;
  width: 31px;
  height: 51px;
  top: 5px;
  right: 20px;
`;

export const Text = styled.span`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  color: #ff0000;
  bottom: 15px;
  left: 0px;
`;
