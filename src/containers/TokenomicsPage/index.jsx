import {
  Heading,
  TokenomicsPageContainer,
  Subheading,
  Text,
  BuyButton,
  LurryImage,
} from "./styled";
import Image from "next/image";

const LurrynomicsText = {
  heading: "Lurry-nomics",
  subheading: "Lurry likes to keep things simple",
  supply: "1,000,000,000 supply",
  liquidity: "liquidity burned",
  contract: "contract renounced",
  utility: "utility...c'mon now...he's just a duck",
  button: "buy $lurry",
};

const TokenomicsPage = () => {
  function handleBuy() {
    console.log("redirect to dextools");
  }

  return (
    <TokenomicsPageContainer>
      <Image
        width={970}
        height={1000}
        src={"/assets/yetiLurry.png"}
        style={{
          position: "absolute",
          right: "0",
          zIndex: 1,
        }}
      />
      <Heading>{LurrynomicsText.heading}</Heading>
      <Subheading>{LurrynomicsText.subheading}</Subheading>
      <Text>{LurrynomicsText.supply}</Text>
      <Text>{LurrynomicsText.liquidity}</Text>
      <Text>{LurrynomicsText.contract}</Text>
      <Text>{LurrynomicsText.utility}</Text>
      <BuyButton>{LurrynomicsText.button}</BuyButton>
    </TokenomicsPageContainer>
  );
};

export default TokenomicsPage;
