import { InputHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

// @button type
export type ButtonType = "filled" | "outlined";
export type ButtonColor = "default" | "primary" | "secondary" | "danger" | "warning" | "success";

// @extend default button props
export type Props = InputHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  name?: string;
  type: ButtonType;
  color: ButtonColor;
  children?: ReactNode;
  className?: string;
};

export default function Button({
  title,
  color = "default",
  type = "filled",
  name = "button",
  className,
  children,
  ...props
}: Props) {
  return (
    <button aria-label={name} className={(clsx(className, styles[color]), styles[type])} {...props}>
      {title && title}
      {children && children}
    </button>
  );
}
