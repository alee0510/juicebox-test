import clsx from "clsx";
import Input from "@/app/_lib/components/ui/input";
import styles from "./form.module.css";
import global from "@/app/page.module.css";

export default function FormScreen() {
  return (
    <section className={clsx(global["section"], global["section-3"])} style={{ opacity: 0 }}>
      <div className={clsx(global["content-container"], styles["label-context"])}>
        <h5 className={styles["heading-context"]}>
          Let’s start with the basics. Type in your first name.
        </h5>
      </div>
      <div className={global["content-container"]}>
        <Input label="First Name" placeholder="First Name" />
      </div>
    </section>
  );
}
