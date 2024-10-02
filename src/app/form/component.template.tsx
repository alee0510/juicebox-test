import React from "react";

// @components & styles
import clsx from "clsx";
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
      <div className={clsx(global["content-container"], styles["label-context"])}>
        <h5 className={styles["heading-context"]}>{info}</h5>
      </div>
      <div className={global["content-container"]}>{children}</div>
    </React.Fragment>
  );
}
