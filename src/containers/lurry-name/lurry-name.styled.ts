import styled from "styled-components";

export const LurryHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
`;

export const LurryHeading = styled.button`
  font-family: "gochi-hand";
  font-size: 120px;
  color: #7abbbc;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    color: #4d7f80;
  }
`;
