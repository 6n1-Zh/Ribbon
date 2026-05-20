import styles from "./Section.module.css";

interface Props {
  children: React.ReactNode;
  background?: "pink" | "cream";
  id?: string;
}

export default function Section({ children, background = "cream", id }: Props) {
  return (
    <section id={id} className={`${styles.section} ${styles[background]}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
