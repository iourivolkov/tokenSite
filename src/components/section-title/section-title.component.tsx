import { SectionTitleStyled } from "./section-title.styled";

interface SectionTitleProps {
  children: string;
}

export function SectionTitle({ children, ...rest }: SectionTitleProps) {
  return <SectionTitleStyled {...rest}>{children}</SectionTitleStyled>;
}
