import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import hamburger from "../../assets/hamburger.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import allergy from "../../assets/allergy.svg";
import card from "../../assets/card.svg";

const Index = ({
  arrowState1,
  setArrowState1,
  arrowState2,
  setArrowState2,
  arrowState3,
  setArrowState3,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/menu_s`);
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [waitingNumber, setWaitingNumber] = useState(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setArrowState1(0); // 검은 점이 햄버거 영역에 들어왔을 때 arrowState1을 0으로 설정
    };

    const handleMouseLeave = () => {
      setArrowState1(1); // 검은 점이 햄버거 영역에서 나갔을 때 arrowState1을 1로 설정
    };

    const handleMouseEnter2 = () => {
      setArrowState2(0);
    };

    const handleMouseLeave2 = () => {
      setArrowState2(1);
    };

    const handleMouseEnter3 = () => {
      setArrowState3(0);
    };

    const handleMouseLeave3 = () => {
      setArrowState3(1);
    };

    // 햄버거 박스에 마우스 이벤트 리스너 추가
    const box1 = document.querySelector(".menu-element"); // 클래스 이름 확인
    if (box1) {
      box1.addEventListener("mouseenter", handleMouseEnter);
      box1.addEventListener("mouseleave", handleMouseLeave);
    }
    const box2 = document.querySelector(".menu2-element"); // 클래스 이름 확인
    if (box2) {
      box2.addEventListener("mouseenter", handleMouseEnter2);
      box2.addEventListener("mouseleave", handleMouseLeave2);
    }
    const box3 = document.querySelector(".menu3-element"); // 클래스 이름 확인
    if (box3) {
      box3.addEventListener("mouseenter", handleMouseEnter3);
      box3.addEventListener("mouseleave", handleMouseLeave3);
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      if (box1) {
        box1.removeEventListener("mouseenter", handleMouseEnter);
        box1.removeEventListener("mouseleave", handleMouseLeave);
        setArrowState1(); // Ensure setArrowState1 is called when box1 is removed
      } else if (box2) {
        box2.removeEventListener("mouseenter", handleMouseEnter2);
        box2.removeEventListener("mouseleave", handleMouseLeave2);
        setArrowState2(); // Call setArrowState2 for box2
      } else if (box3) {
        box3.removeEventListener("mouseenter", handleMouseEnter3);
        box3.removeEventListener("mouseleave", handleMouseLeave3);
        setArrowState3(); // Call setArrowState3 for box3
      }
    };
  }, [setArrowState1, setArrowState2, setArrowState3]);

  const handlePlus = (itemName) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleMinus = (itemName) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleAddItem = (name) => {
    setSelectedItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.name === name);
      if (itemExists) {
        return prevItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { name, price: 3500, quantity: 1 }];
      }
    });
  };

  const calculateTotalAmount = () => {
    return selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePayClick = () => {
    if (selectedItems.length > 0) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setWaitingNumber(200);
    }, 5000);
  };

  const handleGoBack = () => {
    navigate(`/`);
  };

  const hasItems = selectedItems.length > 0;

  return (
    <>
      <S.Banner>
        <S.Team>Chun-Li</S.Team>
      </S.Banner>
      <S.MenuBox>
        <S.Menu>추천메뉴</S.Menu>
        <S.Menu>
          <S.Color>햄버거</S.Color>
          <S.Line />
        </S.Menu>
        <S.Menu onClick={onClick}>사이드</S.Menu>
        <S.Menu>음료</S.Menu>
        <S.Menu>이달의 상품</S.Menu>
      </S.MenuBox>

      <S.Box1
        className="menu-element" // 클래스명을 추가하여 App.jsx에서 참조할 수 있도록 함
        onClick={() => handleAddItem("햄버거 1")}
      >
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 1</S.Name>
        {arrowState1 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>햄버거 1</S.ExplanName>
            <S.Allergy src={allergy} alt="allergy" />
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br />
              입안에서 살살 녹는 치즈와 신선한 양상추, <br />
              양파, 그리고 피클까지, 40년 넘게 전 세계인의
              <br /> 입맛을 사로잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box1>
      <S.Box2
        className="menu2-element"
        onClick={() => handleAddItem("햄버거 2")}
      >
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 2</S.Name>
        {arrowState2 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>햄버거 2</S.ExplanName>
            <S.Allergy src={allergy} alt="allergy" />
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br />
              입안에서 살살 녹는 치즈와 신선한 양상추, <br />
              양파, 그리고 피클까지, 40년 넘게 전 세계인의
              <br /> 입맛을 사로잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box2>
      <S.Box3
        className="menu3-element"
        onClick={() => handleAddItem("햄버거 3")}
      >
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 3</S.Name>
        {arrowState3 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>햄버거 3</S.ExplanName>
            <S.Allergy src={allergy} alt="allergy" />
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br />
              입안에서 살살 녹는 치즈와 신선한 양상추, <br />
              양파, 그리고 피클까지, 40년 넘게 전 세계인의
              <br /> 입맛을 사로잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box3>

      <S.TotalBox hasItems={hasItems}>
        <S.ListBlank />
        {selectedItems.map((item, index) => (
          <S.List key={index}>
            <S.ListName>{item.name}</S.ListName>
            <S.ListMoney>
              {(item.price * item.quantity).toLocaleString()}원
            </S.ListMoney>
            <S.ListMinus
              src={minus}
              alt="minus"
              onClick={() => handleMinus(item.name)}
            />
            <S.ListNumber>{item.quantity}</S.ListNumber>
            <S.ListPlus
              src={plus}
              alt="plus"
              onClick={() => handlePlus(item.name)}
            />
          </S.List>
        ))}
      </S.TotalBox>

      <S.PayBtn hasItems={hasItems} onClick={handlePayClick}>
        {calculateTotalAmount().toLocaleString()}원 결제하기
      </S.PayBtn>

      {isModalOpen && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalTitle>결제 확인</S.ModalTitle>
            <S.ModalBody>
              {selectedItems.map((item, index) => (
                <div key={index}>
                  <S.Item>
                    <span>{item.name} </span>
                    <S.Blank />
                    <span>
                      {(item.price * item.quantity).toLocaleString()}원
                    </span>
                    <S.Blank />
                    <span>{item.quantity}개</span>
                  </S.Item>
                </div>
              ))}
              <S.ModalLine />
              <S.ModalTotal>
                총 금액 {calculateTotalAmount().toLocaleString()}원
              </S.ModalTotal>
            </S.ModalBody>
            <S.ModalButtons>
              <S.ModalButton_OK onClick={handleCloseModal}>
                확인
              </S.ModalButton_OK>
              <S.ModalButton_NO onClick={handleGoBack}>
                돌아가기
              </S.ModalButton_NO>
            </S.ModalButtons>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {isProcessingPayment && (
        <S.ModalOverlay>
          <S.ModalContent2>
            <S.ModalTitle>신용카드 결제 중...</S.ModalTitle>
            <S.ModalImg src={card} alt="card" />
          </S.ModalContent2>
        </S.ModalOverlay>
      )}

      {waitingNumber && (
        <S.ModalOverlay>
          <S.ModalContent3>
            <S.ModalTitle3>대기번호 {waitingNumber}번</S.ModalTitle3>
            <S.ModalButton_Wait onClick={handleGoBack}>확인</S.ModalButton_Wait>
          </S.ModalContent3>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default Index;
