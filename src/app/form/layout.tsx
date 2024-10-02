import global from "@/app/page.module.css";

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return <section className={global["section"]}>{children}</section>;
}
