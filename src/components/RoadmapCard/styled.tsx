import styled from "styled-components";

export const CardDiv = styled.div`
  height: 400px;
  width: 420px;
  border-radius: 15px;
  background-color: #98d1d2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
`;

export const CardHr = styled.hr`
  background-color: #fff;
  height: 4px;
  width: 60%;
`;

export const CardHeading = styled.h2`
  font-family: "gochi-hand";
  font-size: 40px;
`;

export const CardText = styled.p`
  font-family: "gochi-hand";
  font-size: 18px;
  max-width: 30ch;
`;
