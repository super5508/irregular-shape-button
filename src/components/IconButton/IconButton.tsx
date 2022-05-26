import { ButtonHTMLAttributes } from "react";

import "./IconButton.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 1 | 2 | 3 | 4;
}

export function IconButton({
  children,
  variant = 1,
  ...props
}: IconButtonProps) {
  return (
    <button className={`icon-button variant-${variant}`} {...props}>
      {/* <span className="icon-button__background">{IconButtonBg[variant]}</span> */}
      <span className="icon-button__content">{children}</span>
    </button>
  );
}
