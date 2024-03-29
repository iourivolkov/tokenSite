import {
  Heading,
  TokenomicsPageContainer,
  Subheading,
  Text,
  BuyButton,
  TokenomicsTextContainer,
  LurryCoin1,
  LurryCoin2,
  LurryCoin3,
  LurryCoin4,
  LurryCoin5,
  LurryCoin6,
  LurryCoin7,
  LurryCoin8,
  LurryCoin9,
  ClickToCopy,
  ContractSubheading,
} from "./tokenomics.styled";
import { useState } from "react";

import useSound from "use-sound";
import moneySound from "../../assets/sounds/moneyTrimmed.mp3";
import clickSound from "../../assets/sounds/clickSound.mp3";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { data } from "../../data";

const LurrynomicsText = {
  heading: "Lurry-nomics",
  subheading: "Lurry likes to keep things simple",
  subheadingContract: "CA: 6DEbzgDNQYkgk7sFZ1cTBjeUK9gpsLjgURY9EtHkpyCJ",
  supplyPrompt: "Supply:",
  supply: "1,000,000,000",
  liquidityPrompt: "Liquidity:",
  liquidity: "90%, burned",
  teamPrompt: "Team:",
  team: "6%",
  marketingPrompt: "Marketing:",
  marketing: "2%",
  collaborationsPrompt: "Collaborations:",
  collaborations: "2%",
  contractPrompt: "Contract:",
  contract: "click to copy",
  utilityPrompt: "Utility:",
  utility: "...wat utility?",
  button: "buy $lurry",
};

// @TODO - add contract to "click to copy button" once live!!
const TOKEN_CONTRACT = data.tokenContract;
// @TODO - add correct dex link once contract is live!!
const BUY_LINK = data.buyLink;

export const TokenomicsContainer = () => {
  const [copied, setCopied] = useState(false);

  const [playClick] = useSound(clickSound);
  const [playMoney] = useSound(moneySound);

  async function handleCopy() {
    playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function handleBuy() {
    playMoney();
    console.log("redirect to dextools");
  }

  return (
    <TokenomicsPageContainer id="tokenomics-page">
      <LurryCoin1 src="/assets/3dCoin5.png" />
      <LurryCoin2 src="/assets/3dCoin5.png" />
      <LurryCoin3 src="/assets/3dCoin3.png" />
      <LurryCoin4 src="/assets/3dCoin1.png" />
      <LurryCoin5 src="/assets/3dCoin1.png" />
      <LurryCoin6 src="/assets/3dCoin5.png" />
      <LurryCoin7 src="/assets/3dCoin2.png" />
      <LurryCoin8 src="/assets/3dCoin6.png" />
      <LurryCoin9 src="/assets/3dCoin9.png" />

      <Heading>{LurrynomicsText.heading}</Heading>

      <Subheading>{LurrynomicsText.subheading}</Subheading>

      <ContractSubheading>
        {LurrynomicsText.subheadingContract}
      </ContractSubheading>

      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.supplyPrompt}</Text>
        <Text>{LurrynomicsText.supply}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.liquidityPrompt}</Text>
        <Text>{LurrynomicsText.liquidity}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.teamPrompt}</Text>
        <Text>{LurrynomicsText.team}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.marketingPrompt}</Text>
        <Text>{LurrynomicsText.marketing}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.collaborationsPrompt}</Text>
        <Text>{LurrynomicsText.collaborations}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.contractPrompt}</Text>
        <CopyToClipboard text={TOKEN_CONTRACT} onCopy={handleCopy}>
          <ClickToCopy>
            {copied ? "copied" : LurrynomicsText.contract}
          </ClickToCopy>
        </CopyToClipboard>
      </TokenomicsTextContainer>
      <TokenomicsTextContainer>
        <Text>{LurrynomicsText.utilityPrompt}</Text>
        <Text>{LurrynomicsText.utility}</Text>
      </TokenomicsTextContainer>
      <a target="_blank" href={BUY_LINK}>
        <BuyButton onClick={handleBuy}>{LurrynomicsText.button}</BuyButton>
      </a>
    </TokenomicsPageContainer>
  );
};
