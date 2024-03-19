import styled from "styled-components";

// @TODO - prevent bg scroll when mobile nav is open

export const MobileNavContainer = styled.div`
  position: fixed;
  z-index: 100;
  background: #ffcd00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  width: 100%;
  height: 100vh;
`;

export const MobileNavMenuItem = styled.button`
  font-family: "handjet-semiBold";
  font-size: 80px;
  border: none;
  background: none;
  cursor: pointer;
  text-transform: uppercase;
  margin: -20px 0 -20px 0;

  &:hover {
    color: #fff;
  }
`;

export const MobileNavOpen = styled.img``;

export const MobileNavClose = styled.img``;
