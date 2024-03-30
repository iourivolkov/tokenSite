import { useTranslation } from "react-i18next";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef } from "react";
import "./style.css";

import { US, CN } from "country-flag-icons/react/3x2";

const languages = {
  en: {
    title: "EN",
    value: "en",
    flagComponent: <US title="English" className="flag" />,
  },
  zh: {
    title: "CN",
    value: "zh",
    flagComponent: <CN title="Chinese" className="flag" />,
  },
} as const;

type Languages = keyof typeof languages;

export function LanguageSelector() {
  const { i18n } = useTranslation();
  function changeLanguage(lang: Languages) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <Select.Root defaultValue={i18n.language} onValueChange={changeLanguage}>
        <Select.Trigger className="SelectTrigger" aria-label="Food">
          <Select.Value />

          {/* <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon> */}
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="SelectContent">
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>

            <Select.Viewport className="SelectViewport">
              {Object.entries(languages).map(
                ([key, { title, flagComponent }]) => (
                  <SelectItem key={key} value={key}>
                    {flagComponent}
                    {title}
                  </SelectItem>
                )
              )}
              {/* <SelectItem value="en">
                <US title="English" className="flag" />
                EN
              </SelectItem>
              <SelectItem value="zh">
                <CN title="Chinese" className="flag" />
                ZH
              </SelectItem> */}
            </Select.Viewport>

            <Select.ScrollDownButton className="SelectScrollButton">
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
      className={classnames("SelectItem", className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText asChild>
        <span className="SelectItemText">{children}</span>
      </Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});
