import styled from "styled-components";

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 15;
`;

export const NavItemContainer = styled.div`
  display: flex;
  margin: 40px 60px 40px 60px;
`;

export const NavItemSpan = styled.span`
  font-size: 20px;
  font-family: "handjet-regular";
  margin: 0 10px 0 10px;
  text-transform: uppercase;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #fff;
  }
`;
