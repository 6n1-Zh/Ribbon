import styles from "./Footer.module.css";

interface Props {
  copyright: string;
}

export default function Footer({ copyright }: Props) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>{copyright}</p>
      </div>
    </footer>
  );
}
