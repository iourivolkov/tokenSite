import styled from "styled-components";

export const RoadmapCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const RoadmapPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #edfffe;
`;

export const RoadmapPageHeading = styled.h1`
  font-family: "gochi-hand";
  font-size: 80px;
  text-align: center;
  color: #7abbbc;
  margin-bottom: 100px;
`;

export const RoadmapCloud = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 200px;
`;
