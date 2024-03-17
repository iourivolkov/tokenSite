import { CardDiv, CardHeading, CardText, CardHr } from "./roadmap-card.styled";

interface RoadmapCardProps {
  headingText: string;
  cardText: string;
}

export const RoadmapCard = ({ headingText, cardText }: RoadmapCardProps) => {
  return (
    <CardDiv>
      <CardHeading>{headingText}</CardHeading>
      <CardHr />
      <CardText>{cardText}</CardText>
    </CardDiv>
  );
};
