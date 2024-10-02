import React from "react";

// @components & styles
import global from "@/app/page.module.css";
import styles from "@/app/form/page.module.css";

// @template
export default function LayoutTemplate({
  info,
  children,
}: {
  info: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <React.Fragment>
      <div className={styles["label-context"]}>
        <h5>{info}</h5>
      </div>
      <div className={global["content-container"]}>{children}</div>
    </React.Fragment>
  );
}
