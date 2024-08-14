import React, { useState } from "react";
import * as S from "./style";
import hamburger from "../../assets/hamburger.svg";
import arrow_u from "../../assets/arrow_u.svg";
import arrow_d from "../../assets/arrow_d.svg";

const Index = () => {
  // State variable to control which arrow image to show
  const [arrowState, setArrowState] = useState(1);

  const toggleArrow = () => {
    setArrowState((prevState) => (prevState === 1 ? 0 : 1));
  };

  return (
    <>
      <S.Banner>
        <S.Team>Chun-Li</S.Team>
      </S.Banner>
      <S.MenuBox>
        <S.Menu>추천메뉴</S.Menu>
        <S.Menu>
          <S.Color>햄버거</S.Color>
        </S.Menu>
        <S.Menu>사이드</S.Menu>
        <S.Menu>음료</S.Menu>
        <S.Menu>아이스크림</S.Menu>
      </S.MenuBox>

      <S.Box1 onClick={toggleArrow}>
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 1</S.Name>
        <S.Arrow src={arrowState === 1 ? arrow_u : arrow_d} alt="arrow" />
        {arrowState === 0 && (
          <S.ExplanBox>
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br></br>
              입안에서 살살 녹는 치즈와 신선한 양상추, <br></br>
              양파, 그리고 피클까지, 40년 넘게 전 세계인의<br></br> 입맛을 사로
              잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box1>
      <S.Box2>
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 2</S.Name>
        <S.Arrow src={arrow_u} alt="arrow" />
      </S.Box2>
      <S.Box3>
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 3</S.Name>
        <S.Arrow src={arrow_u} alt="arrow" />
      </S.Box3>
      <S.TotalBox />
      <S.PayBtn>결제하기</S.PayBtn>
    </>
  );
};
export default Index;
