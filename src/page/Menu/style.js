import styled from "styled-components";

export const Banner = styled.div`
  position: absolute;
  width: 100vw;
  height: 90px;
  background-color: #ff0000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Team = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 25px;
  font-family: "Pretendard";
  font-weight: 700;
`;

export const Box1 = styled.div`
  position: absolute;
  width: 100vw;
  height: 98px;
  border: 2px #e6e6e6 solid;
  border-bottom: none;
  top: 190px;
`;
export const Box2 = styled.div`
  position: absolute;
  width: 100vw;
  height: 98px;
  border: 2px #e6e6e6 solid;
  border-bottom: none;
  top: 290px;
`;
export const Box3 = styled.div`
  position: absolute;
  width: 100vw;
  height: 98px;
  border: 2px #e6e6e6 solid;
  top: 390px;
`;

export const Img = styled.img`
  position: relative;
  display: flex;
  align-items: center;
  left: 55px;
  width: 123px;
  height: 81px;
`;

export const Name = styled.div`
  position: relative;
  color: #232323;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 700;
  bottom: 43px;
  left: 190px;
  display: flex;
  align-items: center;
`;
export const Color = styled.div`
  color: #ff0000;
`;
export const MenuBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 55px;
  top: 120px;
  left: 50px;
`;

export const Menu = styled.div`
  position: relative;
  color: #232323;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 700;
`;

export const Arrow = styled.img`
  position: relative;
  width: 18px;
  height: 9px;
  bottom: 60px;
  left: 380px;
  display: flex;
  align-items: center;
`;

export const TotalBox = styled.div`
  position: absolute;
  width: 383px;
  height: 125px;
  border: 3px #e6e6e6 solid;
  border-radius: 20px;
  bottom: 120px;
  right: 40px;
`;

export const PayBtn = styled.button`
  position: absolute;
  width: 383px;
  height: 69px;
  background-color: #e6e6e6;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 500;
  left: 55px;
  bottom: 40px;
`;

export const ExplanBox = styled.button`
  position: absolute;
  width: 100vw;
  height: 98px;
  background-color: #ae0000;
  border: none;
  top: 100px;
  z-index: 10;
`;

export const ExplanName = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 400;
  text-align: justify;
  top: 13px;
  left: 70px;
`;

export const Explan = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 13px;
  font-family: "Pretendard";
  font-weight: 100;
  text-align: justify;
  bottom: 8px;
  left: 160px;
`;
