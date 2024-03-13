import {
  Heading,
  TokenomicsPageContainer,
  Subheading,
  Text,
  BuyButton,
  LurryImage,
} from "./styled";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const LurrynomicsText = {
  heading: "Lurry-nomics",
  subheading: "Lurry likes to keep things simple",
  supply: "1,000,000,000 supply",
  liquidity: "liquidity burned",
  contract: "contract renounced",
  utility: "utility...c'mon now...he's just a duck",
  button: "buy $lurry",
};

// @TODO - animate yetiLurry to peak out from right side
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
      <Text>{LurrynomicsText.supply}</Text>
      <Text>{LurrynomicsText.liquidity}</Text>
      <Text>{LurrynomicsText.contract}</Text>
      <Text>{LurrynomicsText.utility}</Text>
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
