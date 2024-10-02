import clsx from "clsx";
import Input from "@/app/_lib/components/ui/input";
import styles from "./form.module.css";
import global from "@/app/page.module.css";

// @props
type FormScreenProps = {
  componentRef?: React.RefObject<HTMLDivElement>;
};

export default function FormScreen({ componentRef }: FormScreenProps) {
  return (
    <section ref={componentRef} className={clsx(global["section"], global["section-3"])}>
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
