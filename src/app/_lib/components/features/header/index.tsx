import Image from "next/image";
import styles from "@/app/_lib/components/features/header/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <button aria-label="back-button" className={styles["icon-button"]}>
        <Image src="/icons/arrow-left.svg" alt="back" priority width={20} height={20} />
      </button>
      <div aria-label="logo" className={styles.logo}>
        <Image src="/images/logo.svg" priority alt="logo" sizes="100%" width={123} height={29} />
      </div>
      <button aria-label="refresh-button" className={styles["icon-button"]}>
        <Image src="/icons/refresh.svg" alt="refresh" priority width={20} height={20} />
      </button>
    </header>
  );
}
