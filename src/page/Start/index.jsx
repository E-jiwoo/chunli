import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import takein from "../../assets/takein.svg";
import takeout from "../../assets/takeout.svg";

const index = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/menu_h`);
  };
  return (
    <>
      <S.Container>
        <S.Title>아이스트랙킹으로 빠르고 편리하게</S.Title>
        <S.Name>Chun-Li</S.Name>
        <S.TakeOut onClick={onClick}>
          <S.Img src={takeout} alt="takeout" />
          <S.Text>포장 주문</S.Text>
        </S.TakeOut>
        <S.TakeIn onClick={onClick}>
          <S.Img src={takein} alt="takein" />
          <S.Text>매장 식사</S.Text>
        </S.TakeIn>
      </S.Container>
    </>
  );
};

export default index;
