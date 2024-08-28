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
        <S.TakeOut>
          <S.Img src={takeout} alt="takeout" />
          <S.Text>포장 주문</S.Text>
        </S.TakeOut>
        <S.TakeIn>
          <S.Img src={takein} alt="takein" />
          <S.Text>매장 식사</S.Text>
        </S.TakeIn>
      </S.Container>
    </>
  );
};

export default index;
