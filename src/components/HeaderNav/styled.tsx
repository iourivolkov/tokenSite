import styled from "styled-components";

export const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
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
  font-size: 14px;
  font-family: "gochi-hand";
  margin: 0 5px 0 5px;
  text-transform: capitalize;
  cursor: pointer;
  color: #7abbbc;

  &:hover {
    color: #fff;
  }
`;

export const NavigationItemContainer = styled.div`
  display: flex;
`;
