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
import { useAnalytics } from "../../hooks/use-analytics";
import { useTranslation } from "react-i18next";

const LurrynomicsText = {
  subheadingContract: "CA: 6DEbzgDNQYkgk7sFZ1cTBjeUK9gpsLjgURY9EtHkpyCJ",
  supply: "1,000,000,000",
  liquidity: "90%",
  team: "6%",
  marketing: "2%",
  collaborations: "2%",
};

// @TODO - add contract to "click to copy button" once live!!
const TOKEN_CONTRACT = data.tokenContract;
// @TODO - add correct dex link once contract is live!!
const BUY_LINK = data.buyLink;

export const TokenomicsContainer = () => {
  const { logEvent } = useAnalytics();
  const { t } = useTranslation();

  const [copied, setCopied] = useState(false);

  const [playClick] = useSound(clickSound);
  const [playMoney] = useSound(moneySound);

  async function handleCopy() {
    playClick();
    setCopied(true);
    logEvent("copy_contract");
    setTimeout(() => setCopied(false), 1500);
  }

  function handleBuy() {
    playMoney();
    logEvent("click_buy_button");
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

      <Heading>{t("tokenomics.heading")}</Heading>

      <Subheading>{t("tokenomics.subheading")}</Subheading>

      <ContractSubheading
        onMouseUp={() => {
          logEvent("select_contract_subheading");
        }}
      >
        {LurrynomicsText.subheadingContract}
      </ContractSubheading>

      <TokenomicsTextContainer>
        <Text>{t("tokenomics.supplyLabel")}</Text>
        <Text>{LurrynomicsText.supply}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{t("tokenomics.liquidityLabel")}</Text>
        <Text>{LurrynomicsText.liquidity}{t("tokenomics.liquidityText")}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{t("tokenomics.teamLabel")}</Text>
        <Text>{LurrynomicsText.team}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{t("tokenomics.marketingLabel")}</Text>
        <Text>{LurrynomicsText.marketing}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{t("tokenomics.collaborationLabel")}</Text>
        <Text>{LurrynomicsText.collaborations}</Text>
      </TokenomicsTextContainer>

      <TokenomicsTextContainer>
        <Text>{t("tokenomics.contractLabel")}</Text>
        <CopyToClipboard text={TOKEN_CONTRACT} onCopy={handleCopy}>
          <ClickToCopy>
            {copied ? "copied" : t("tokenomics.contractButton")}
          </ClickToCopy>
        </CopyToClipboard>
      </TokenomicsTextContainer>
      <TokenomicsTextContainer>
        <Text>{t("tokenomics.utilityLabel")}</Text>
        <Text>{t("tokenomics.utilityText")}</Text>
      </TokenomicsTextContainer>
      <a target="_blank" href={BUY_LINK}>
        <BuyButton onClick={handleBuy}>{t("tokenomics.buyButton")}</BuyButton>
      </a>
    </TokenomicsPageContainer>
  );
};
