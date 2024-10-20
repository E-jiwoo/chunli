import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import icecream from "../../assets/icecream.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import milk from "../../assets/milk.svg";
import card from "../../assets/card.svg";

const Index = ({
  arrowState4,
  setArrowState4,
  arrowState5,
  setArrowState5,
  arrowState6,
  setArrowState6,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/menu_h`);
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [waitingNumber, setWaitingNumber] = useState(null);

  useEffect(() => {
    const handleMouseEnter4 = () => {
      setArrowState4(0); // 검은 점이 아이스크림 영역에 들어왔을 때 arrowState4을 0으로 설정
    };

    const handleMouseLeave4 = () => {
      setArrowState4(1); // 검은 점이 아이스크림 영역에서 나갔을 때 arrowState4을 1로 설정
    };

    const handleMouseEnter5 = () => {
      setArrowState5(0);
    };

    const handleMouseLeave5 = () => {
      setArrowState5(1);
    };

    const handleMouseEnter6 = () => {
      setArrowState6(0);
    };

    const handleMouseLeave6 = () => {
      setArrowState6(1);
    };

    // 아이스크림 박스에 마우스 이벤트 리스너 추가
    const box4 = document.querySelector(".menu4-element"); // 클래스 이름 확인
    if (box4) {
      box4.addEventListener("mouseenter", handleMouseEnter4);
      box4.addEventListener("mouseleave", handleMouseLeave4);
    }
    const box5 = document.querySelector(".menu5-element"); // 클래스 이름 확인
    if (box5) {
      box5.addEventListener("mouseenter", handleMouseEnter5);
      box5.addEventListener("mouseleave", handleMouseLeave5);
    }
    const box6 = document.querySelector(".menu6-element"); // 클래스 이름 확인
    if (box6) {
      box6.addEventListener("mouseenter", handleMouseEnter6);
      box6.addEventListener("mouseleave", handleMouseLeave6);
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      if (box4) {
        box4.removeEventListener("mouseenter", handleMouseEnter4);
        box4.removeEventListener("mouseleave", handleMouseLeave4);
        setArrowState4(); // Ensure setArrowState4 is called when box4 is removed
      } else if (box5) {
        box5.removeEventListener("mouseenter", handleMouseEnter5);
        box5.removeEventListener("mouseleave", handleMouseLeave5);
        setArrowState5(); // Call setArrowState5 for box5
      } else if (box6) {
        box6.removeEventListener("mouseenter", handleMouseEnter6);
        box6.removeEventListener("mouseleave", handleMouseLeave6);
        setArrowState6(); // Call setArrowState6 for box6
      }
    };
  }, [setArrowState4, setArrowState5, setArrowState6]);

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
          <S.Color>아이스크림</S.Color>
          <S.Line />
        </S.Menu>
        <S.Menu onClick={onClick}>사이드</S.Menu>
        <S.Menu>음료</S.Menu>
        <S.Menu>이달의 상품</S.Menu>
      </S.MenuBox>

      <S.Box4
        className="menu4-element" // 클래스명을 추가하여 App.jsx에서 참조할 수 있도록 함
        onClick={() => handleAddItem("아이스크림 1")}
      >
        <S.Img src={icecream} alt="icecream" />
        <S.Name>아이스크림 1</S.Name>
        {arrowState4 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>아이스크림 1</S.ExplanName>
            <S.Milk src={milk} alt="milk" />
            <S.Explan>
              칼로리 144kcal <br />
              나트륨 55mg 당 15g <br />
              단백질 3g 포화지방 2.5g
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box4>
      <S.Box5
        className="menu5-element"
        onClick={() => handleAddItem("아이스크림 2")}
      >
        <S.Img src={icecream} alt="icecream" />
        <S.Name>아이스크림 2</S.Name>
        {arrowState5 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>아이스크림 2</S.ExplanName>
            <S.Milk src={milk} alt="milk" />
            <S.Explan>
              칼로리 144kcal <br />
              나트륨 55mg 당 15g <br />
              단백질 3g 포화지방 2.5g
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box5>
      <S.Box6
        className="menu6-element"
        onClick={() => handleAddItem("아이스크림 3")}
      >
        <S.Img src={icecream} alt="icecream" />
        <S.Name>아이스크림 3</S.Name>
        {arrowState6 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>아이스크림 3</S.ExplanName>
            <S.Milk src={milk} alt="milk" />
            <S.Explan>
              칼로리 144kcal <br />
              나트륨 55mg 당 15g <br />
              단백질 3g 포화지방 2.5g
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box6>

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
