import {
  Heading,
  TokenomicsPageContainer,
  Subheading,
  Text,
  BuyButton,
  LurryImage,
  TokenomicsContainer,
  TokenomicsTextContainer,
} from "./styled";
import Link from "next/link";

const LurrynomicsText = {
  heading: "Lurry-nomics",
  subheading: "Lurry likes to keep things simple",
  supplyPrompt: "Supply:",
  supply: "1,000,000,000",
  liquidityPrompt: "Liquidity:",
  liquidity: "burned",
  contractPrompt: "Contract:",
  contract: "renounced",
  utilityPrompt: "Utility:",
  utility: "wat utility?",
  button: "buy $lurry",
};

// @TODO - add correct dex link once contract is live
// @TODO - add diff font color to text?

const TokenomicsPage = () => {
  function handleBuy() {
    console.log("redirect to dextools");
  }

  return (
    <TokenomicsPageContainer>
      <LurryImage src="/assets/yetiLurry.png" />
      <Heading>{LurrynomicsText.heading}</Heading>
      <Subheading>{LurrynomicsText.subheading}</Subheading>
      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.supplyPrompt}</Text>
        <Text>{LurrynomicsText.supply}</Text>
      </TokenomicsTextContainer>
      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.liquidityPrompt}</Text>
        <Text>{LurrynomicsText.liquidity}</Text>
      </TokenomicsTextContainer>
      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.contractPrompt}</Text>
        <Text>{LurrynomicsText.contract}</Text>
      </TokenomicsTextContainer>
      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.utilityPrompt}</Text>
        <Text>{LurrynomicsText.utility}</Text>
      </TokenomicsTextContainer>
      <Link
        target="_blank"
        href="https://dexscreener.com/solana/432xjvh7zqh85f669hr7ofegkd5cbzd4m3jn41uztc2d"
      >
        <BuyButton onClick={handleBuy}>{LurrynomicsText.button}</BuyButton>
      </Link>
    </TokenomicsPageContainer>
  );
};

export default TokenomicsPage;
