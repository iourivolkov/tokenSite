import { useTranslation } from "react-i18next";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef } from "react";
import desktop from "./desktop.module.css";

import { US, CN } from "country-flag-icons/react/3x2";

const languages = {
  en: {
    title: "EN",
    value: "en",
    flagComponent: <US title="English" className={desktop.flag} />,
  },
  zh: {
    title: "CN",
    value: "zh",
    flagComponent: <CN title="Chinese" className={desktop.flag} />,
  },
} as const;

type Languages = keyof typeof languages;

export function LanguageSelector() {
  const { i18n } = useTranslation();

  console.log(i18n.languages);
  function changeLanguage(lang: Languages) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <Select.Root defaultValue={i18n.language} onValueChange={changeLanguage}>
        <Select.Trigger className={desktop.SelectTrigger}>
          <Select.Value />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className={desktop.SelectContent}>
            <Select.ScrollUpButton className={desktop.SelectScrollButton}>
              <ChevronUpIcon />
            </Select.ScrollUpButton>

            <Select.Viewport className={desktop.SelectViewport}>
              {Object.entries(languages).map(
                ([key, { title, flagComponent }]) => (
                  <SelectItem key={key} value={key}>
                    {flagComponent}
                    {title}
                  </SelectItem>
                )
              )}
            </Select.Viewport>

            <Select.ScrollDownButton className={desktop.SelectScrollButton}>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}

const SelectItem = forwardRef<
  React.ElementRef<typeof Select.Item>,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classnames(desktop.SelectItem, className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText asChild>
        <span className={desktop.SelectItemText}>{children}</span>
      </Select.ItemText>
      <Select.ItemIndicator className={desktop.SelectItemIndicator}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
