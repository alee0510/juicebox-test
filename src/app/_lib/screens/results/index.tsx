import clsx from "clsx";
import Button from "@/app/_lib/components/ui/button";
import styles from "./results.module.css";
import global from "@/app/page.module.css";

export default function ResultScreen() {
  return (
    <section className={clsx(global["section"], global["section-4"])}>
      <div className={clsx(global["content-container"], styles["info-container"])}>
        <h5>Thanks,Name! Now, it’s time to get a reality check.</h5>
        <h5>This will take 2-3 minutes.</h5>
      </div>
      <div className={clsx(global["content-container"])}>
        <Button title="Continue" name="continue-button" type="filled" />
      </div>
    </section>
  );
}
