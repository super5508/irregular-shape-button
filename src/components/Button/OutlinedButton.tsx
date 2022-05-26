import { ButtonHTMLAttributes, ReactNode } from "react";

import "./OutlinedButton.scss";

interface OutlinedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: "sm" | "lg";
  block?: boolean;
}

export function OutlinedButton({
  leftIcon,
  rightIcon,
  children,
  block = false,
  size = "sm",
}: OutlinedButtonProps) {
  return (
    <button
      className={`outlined-button button-${size} ${
        block ? "button-block" : ""
      }`}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
}
