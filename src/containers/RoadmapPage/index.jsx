import RoadmapCard from "@/components/RoadmapCard";
import {
  RoadmapCardContainer,
  RoadmapPageContainer,
  RoadmapPageHeading,
  RoadmapCloud,
} from "./styled";

const RoadmapText = [
  {
    id: 1,
    heading: "Bootcamp",
    text: "Having spent the majority of his life w/ an introverted dev, lurry wants to explored his extroverted side. The first step of Lurry's Quackmap is building a community of likeminded Lurries.",
  },
  {
    id: 2,
    heading: "Artwork",
    text: "Although Lurry is still a newb when it comes to web3, he knows a thing or two about art... Once Lurry's built himself an anti-anti-crypto army to rival Elizabeth Warren's, Lurry wants to reward his followers with his artwork..",
  },
  {
    id: 3,
    heading: "Lurry Labs",
    text: "Lurry may be a duck, but he loves to think ahead..In the future, Lurry wants to start a business..What kind? Only Lurry knows..Don't expect anything though. After all, he's just a duck.",
  },
];

const RoadmapPage = () => {
  return (
    <RoadmapPageContainer>
      <RoadmapCloud src={"../../../public/assets/leftCloud.png"} />
      <RoadmapPageHeading>Quackmap</RoadmapPageHeading>
      <RoadmapCardContainer>
        {RoadmapText.map((item) => (
          <RoadmapCard
            key={item.id}
            headingText={item.heading}
            cardText={item.text}
          />
        ))}
      </RoadmapCardContainer>
    </RoadmapPageContainer>
  );
};

export default RoadmapPage;
