import type { InputHTMLAttributes } from "react";
import Image from "next/image";
import styles from "./input.module.css";
import ArrowLeft from "@/../public/icons/arrow-left.svg";

// @props
type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  onSubmit?: () => void;
};

// @component
export default function Input({ label, placeholder, onSubmit, ...props }: Props): JSX.Element {
  return (
    <div className={styles["container"]}>
      <input
        className={styles["input"]}
        {...props}
        placeholder={placeholder}
        aria-label={`${placeholder}-input`}
      />
      <span className={styles["icon"]} onClick={onSubmit}>
        <Image
          src={ArrowLeft}
          alt={label}
          priority
          width={18}
          height={18}
          style={{
            transform: "rotate(90deg)",
          }}
        />
      </span>
    </div>
  );
}
