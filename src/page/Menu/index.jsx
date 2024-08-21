import React, { useState } from "react";
import * as S from "./style";
import hamburger from "../../assets/hamburger.svg";
import arrow_u from "../../assets/arrow_u.svg";
import arrow_d from "../../assets/arrow_d.svg";

const Index = () => {
  const [arrowState1, setArrowState1] = useState(1);
  const [arrowState2, setArrowState2] = useState(1);
  const [arrowState3, setArrowState3] = useState(1);

  const handleMouseEnter1 = () => {
    setArrowState1(0);
  };

  const handleMouseLeave1 = () => {
    setArrowState1(1);
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
      </S.MenuBox>

      <S.Box1 onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 1</S.Name>
        <S.Arrow src={arrowState1 === 1 ? arrow_u : arrow_d} alt="arrow" />
        {arrowState1 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>햄버거 1</S.ExplanName>
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br />
              입안에서 살살 녹는 치즈와 신선한 양상추, <br />
              양파, 그리고 피클까지, 40년 넘게 전 세계인의
              <br /> 입맛을 사로잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box1>
      <S.Box2 onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 2</S.Name>
        <S.Arrow src={arrowState2 === 1 ? arrow_u : arrow_d} alt="arrow" />
        {arrowState2 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>햄버거 2</S.ExplanName>
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br />
              입안에서 살살 녹는 치즈와 신선한 양상추, <br />
              양파, 그리고 피클까지, 40년 넘게 전 세계인의
              <br /> 입맛을 사로잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box2>
      <S.Box3 onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
        <S.Img src={hamburger} alt="hamburger" />
        <S.Name>햄버거 3</S.Name>
        <S.Arrow src={arrowState3 === 1 ? arrow_u : arrow_d} alt="arrow" />
        {arrowState3 === 0 && (
          <S.ExplanBox>
            <S.ExplanName>햄버거 3</S.ExplanName>
            <S.Explan>
              100% 순 쇠고기 패티 두 장에 빅맥만의 특별한 소스, <br />
              입안에서 살살 녹는 치즈와 신선한 양상추, <br />
              양파, 그리고 피클까지, 40년 넘게 전 세계인의
              <br /> 입맛을 사로잡은 버거의 대명사
            </S.Explan>
          </S.ExplanBox>
        )}
      </S.Box3>
      <S.TotalBox />
      <S.PayBtn>결제하기</S.PayBtn>
    </>
  );
};

export default Index;
