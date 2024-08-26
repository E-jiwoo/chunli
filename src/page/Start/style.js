import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ff0000;
`;

export const Title = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 300;
  color: white;
  top: 220px;
  left: 40px;
`;

export const Name = styled.div`
  position: relative;
  font-size: 85px;
  font-weight: 700;
  color: white;
  top: 220px;
  left: 30px;
`;

export const TakeOut = styled.button`
  position: fixed;
  padding: 20px 155px 20px 155px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  top: 530px;
  left: 50px;
  color: #ff0000;
`;

export const TakeIn = styled.button`
  position: fixed;
  width: 400px;
  height: 60px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: white;
  top: 610px;
  left: 50px;
  color: #ff0000;
`;

export const Img = styled.img`
  position: relative;
  width: 31px;
  height: 51px;
  top: 10px;
  right: 10px;
`;
