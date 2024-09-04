import styled from "styled-components";

export const Banner = styled.div`
  position: absolute;
  width: 100vw;
  height: 80px;
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

export const Line = styled.div`
  position: relative;
  width: 60px;
  height: 3px;
  top: 10px;
  right: 3px;
  background-color: #ff0000;
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

export const Allergy = styled.img`
  position: relative;
  top: 17px;
  right: 135px;
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
  gap: 70px;
  top: 110px;
  left: 105px;
`;

export const Menu = styled.div`
  position: relative;
  color: #232323;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 900;
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

export const PayBtn = styled.button`
  position: absolute;
  width: 383px;
  height: 69px;
  background-color: ${(props) => (props.hasItems ? "#FF1E2E" : "#e6e6e6")};
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
  top: 15px;
  left: 70px;
`;

export const Explan = styled.div`
  position: relative;
  color: #ffffff;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 100;
  text-align: justify;
  bottom: 53px;
  left: 160px;
`;

export const TotalBox = styled.div`
  position: absolute;
  width: 383px;
  height: 125px;
  border: 3px ${(props) => (props.hasItems ? "#FF1E2E" : "#e6e6e6")} solid;
  border-radius: 20px;
  bottom: 120px;
  right: 40px;
`;

export const ListBlank = styled.div`
  padding-top: 10px;
`;
export const List = styled.div`
  position: relative;
  display: flex;
  padding-top: 10px;
  padding-left: 35px;
`;
export const ListName = styled.div`
  color: #000000;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 500;
`;
export const ListMoney = styled.div`
  color: #000000;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 500;
  padding-left: 50px;
`;

export const ListMinus = styled.img`
  padding-top: 1px;
  padding-left: 80px;
  width: 17px;
  height: 17px;
`;

export const ListNumber = styled.div`
  color: #000000;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 500;
  padding-left: 15px;
`;

export const ListPlus = styled.img`
  padding-top: 1px;
  padding-left: 15px;
  width: 17px;
  height: 17px;
`;

export const ListBalnk = styled.div`
  padding-top: 15px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 400px;
  height: 270px;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const ModalContent2 = styled.div`
  width: 400px;
  height: 230px;
  background-color: #ffffff;
  border-radius: 15px;
`;
export const ModalContent3 = styled.div`
  width: 400px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const ModalTitle = styled.h2`
  position: relative;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 700;
  text-align: center;
  top: 30px;
  margin-bottom: 20px;
`;

export const ModalTitle2 = styled.h2`
  position: relative;
  font-size: 24px;
  font-family: "Pretendard";
  font-weight: 700;
  text-align: center;
  top: 30px;
  margin-bottom: 20px;
`;

export const ModalTitle3 = styled.div`
  position: relative;
  font-size: 28px;
  font-family: "Pretendard";
  font-weight: 700;
  text-align: center;
  top: 45px;
  margin-bottom: 20px;
`;
export const ModalImg = styled.img`
  position: relative;
  left: 120px;
  width: 150px;
  height: 150px;

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }

  animation: blink-effect 2s step-end infinite;
`;
export const ModalBody = styled.div`
  position: relative;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 400;
  text-align: left;
  left: 90px;
  top: 45px;
  margin-bottom: 20px;
`;

export const ModalTotal = styled.div`
  position: relative;
  font-size: 20px;
  font-family: "Pretendard";
  font-weight: 500;
  text-align: right;
  top: 20px;
  right: 170px;
  margin-top: 20px;
`;

export const ModalButtons = styled.div`
  display: flex;
  margin-top: 105px;
`;

export const ModalButton_OK = styled.button`
  width: 60%;
  padding: 15px;
  background-color: #ff1e2e;
  color: #ffffff;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 500;
  border: none;
  border-radius: 0px 0px 0px 15px;
  cursor: pointer;
  text-align: center;
`;

export const ModalButton_NO = styled.button`
  width: 60%;
  padding: 15px;
  background-color: #e6e6e6;
  color: #737373;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 500;
  border: none;
  border-radius: 0px 0px 15px 0px;
  cursor: pointer;
  text-align: center;
`;

export const ModalButton_Wait = styled.button`
  position: relative;
  top: 60px;
  width: 100%;
  padding: 15px;
  background-color: #ff1e2e;
  color: #ffffff;
  font-size: 18px;
  font-family: "Pretendard";
  font-weight: 500;
  border: none;
  border-radius: 0px 0px 15px 15px;
  cursor: pointer;
  text-align: center;
`;

export const ModalLine = styled.div`
  position: relative;
  width: 270px;
  height: 1px;
  top: 25px;
  right: 20px;
  background-color: #000000;
`;
export const Blank = styled.div`
  padding-right: 40px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
`;
