import { ButtonHTMLAttributes, ReactNode } from "react";

import "./FilledButton.scss";

interface FilledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "sm" | "lg";
  left?: ReactNode;
  right?: ReactNode;
}

export function FilledButton({
  variant = "sm",
  children,
  left,
  right,
  ...props
}: FilledButtonProps) {
  return (
    <button className={`filled-button button-${variant}`} {...props}>
      {left && left}
      {children}
      {right && right}
    </button>
  );
}
