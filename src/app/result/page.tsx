"use client";
import clsx from "clsx";
import useSearchQuery from "../_lib/hooks/useSearchQuery";

// @components & styles
import Button from "@/app/_lib/components/ui/button";
import styles from "@/app/result/page.module.css";
import global from "@/app/page.module.css";

// @main component
export default function ResultScreen(): JSX.Element {
  // @hooks
  const query = useSearchQuery();
  const name = query.get("name") || "<Name/>";
  const email = query.get("email") || "<Email/>";

  return (
    <section className={global["section"]}>
      <div className={clsx(global["content-container"], styles["info-container"])}>
        <h5>Thanks, {name}! Now, it’s time to get a reality check.</h5>
        <h5>This will take 2-3 minutes.</h5>
      </div>
      <div className={clsx(global["content-container"])}>
        <Button title="Continue" name="continue-button" type="filled" />
      </div>
    </section>
  );
}
