import clsx from "clsx";
import Button from "@/app/_lib/components/ui/button";
import styles from "./home.module.css";
import global from "@/app/page.module.css";

export default function HomeScreen() {
  return (
    <section className={clsx(global["section"], global["section-1"])}>
      <div className={clsx(styles["main-content"])}>
        <p>WA businesses feel confident about future growth</p>
        <p className={styles["align-right"]}>AI cant replace creativity</p>
        <p>Sales measure true success</p>
        <p className={styles["align-right"]}>Human connection drives WA business</p>
        <p>The primary barrier to digital transformation is financial investment</p>
      </div>
      <div className={global["content-container"]}>
        <h2 className={styles["content-heading"]}>
          Compare your thoughts on <span className={styles["gradient-text"]}>technology</span> with
          current industry opinions.
        </h2>
      </div>
      <div className={global["content-container"]}>
        <Button
          title="Get a reality check"
          name="check-reality-button"
          type="filled"
          color="primary"
        />
      </div>
    </section>
  );
}
