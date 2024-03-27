import styled from "styled-components";

export const MobileNavContainer = styled.div`
  position: fixed;
  z-index: 101;
  background: #ffcd00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 100%;
  height: 100dvh;
`;

export const MobileNavMenuItem = styled.button`
  font-family: "handjet-semiBold";
  font-size: 80px;
  border: none;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  margin: -20px 0;
  color: #000;

  &:hover {
    color: #fff;
  }
`;
