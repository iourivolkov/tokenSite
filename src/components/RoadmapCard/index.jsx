import { CardDiv, CardHeading, CardText, CardHr } from "./styled";

const RoadmapCard = ({ headingText, cardText }) => {
  return (
    <CardDiv>
      <CardHeading>{headingText}</CardHeading>
      <CardHr />
      <CardText>{cardText}</CardText>
    </CardDiv>
  );
};

export default RoadmapCard;
