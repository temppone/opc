import { ChevronRight } from "@styled-icons/fa-solid";
import React, { ReactNode } from "react";
import * as S from "./styles";

export interface IButton {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "yellow" | "darkYellow";
  arrow?: boolean;
  onClick: () => void;
  fullWidth?: boolean;
  icon?: ReactNode;
  backgroundLess?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  fullWidth,
  icon,
  color = "yellow",
  arrow = false,
  size = "medium",
  disabled,
  backgroundLess,
}: IButton) => {
  return (
    <S.Container
      disabled={disabled}
      backgroundLess={backgroundLess}
      fullWidth={fullWidth}
      size={size}
      onClick={onClick}
      hasIcon={!!icon}
      color={color}
      arrow={arrow}
    >
      {!!children && <span>{children}</span>}

      {arrow ? (
        <S.Icon>
          <ChevronRight size={25} />
        </S.Icon>
      ) : (
        icon
      )}
    </S.Container>
  );
};

export default Button;
