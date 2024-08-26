import React from "react";
import * as S from "./style";
import takein from "../../assets/takein.svg";
import takeout from "../../assets/takeout.svg";

const index = () => {
  return (
    <>
      <S.Container>
        <S.Title>아이스트랙킹으로 빠르고 편리하게</S.Title>
        <S.Name>Chun-Li</S.Name>
        <S.TakeIn>
          <S.Img src={takein} alt="takein" />
          매장 식사
        </S.TakeIn>
        <S.TakeOut>포장 주문</S.TakeOut>
      </S.Container>
    </>
  );
};

export default index;
