import { useTranslation } from "react-i18next";

type Languages = "en" | "zh";

export function LanguageSelector() {
  const { i18n } = useTranslation();
  function changeLanguage(lang: Languages) {
    return () => {
      i18n.changeLanguage(lang);
    };
  }
  return (
    <>
      <button onClick={changeLanguage("en")}>ens</button>
      <button onClick={changeLanguage("zh")}>zh</button>
    </>
  );
}
