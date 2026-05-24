import type { Language } from "../../data/copy";
import type { CopyData } from "../../data/copy";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import styles from "./Nav.module.css";

interface Props {
  copy: CopyData;
  currentLang: Language;
}

export default function Nav({ copy, currentLang }: Props) {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#scents" className={styles.link}>
            {copy.nav.scents}
          </a>
          <a href="#why-ribbon" className={`${styles.link} ${styles.whyRibbonLink}`}>
            {copy.nav.whyRibbon}
          </a>
          <a href="#contact" className={styles.link}>
            {copy.nav.contact}
          </a>
        </div>

        <a href="#" className={styles.brand}>Ribbon</a>

        <div className={styles.right}>
          <LanguageSwitcher currentLang={currentLang} />
        </div>
      </div>
    </nav>
  );
}
