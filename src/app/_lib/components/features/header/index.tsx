"use client";
import { usePathname, useRouter } from "next/navigation";

// @assets and styles
import Image from "next/image";
import styles from "@/app/_lib/components/features/header/header.module.css";

// @props
type Props = {
  onBack?: () => void;
};

// @component
export default function Header({ onBack }: Props): JSX.Element {
  // @hooks
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className={styles.header}>
      {(pathname !== "/" && (
        <button aria-label="back-button" className={styles["icon-button"]} onClick={onBack}>
          <Image src="/icons/arrow-left.svg" alt="back" priority width={20} height={20} />
        </button>
      )) || <div className={styles["icon-button"]} style={{ opacity: 0 }}></div>}
      <div aria-label="logo" className={styles.logo}>
        <Image src="/images/logo.svg" priority alt="logo" sizes="100%" width={123} height={29} />
      </div>
      <button
        aria-label="refresh-button"
        className={styles["icon-button"]}
        onClick={() => {
          window?.location?.reload();
        }}
      >
        <Image src="/icons/refresh.svg" alt="refresh" priority width={20} height={20} />
      </button>
    </header>
  );
}
