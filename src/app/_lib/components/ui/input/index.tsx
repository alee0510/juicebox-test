"use client";

import type { InputHTMLAttributes } from "react";
import Image from "next/image";
import styles from "./input.module.css";

// @props
type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

// @component
export default function Input({ label, placeholder, ...props }: Props) {
  return (
    <div className={styles["container"]}>
      <input
        className={styles["input"]}
        {...props}
        placeholder={placeholder}
        aria-label={`${placeholder}-input`}
      />
      <span className={styles["icon"]}>
        <Image
          src={"./icons/arrow-left.svg"}
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
