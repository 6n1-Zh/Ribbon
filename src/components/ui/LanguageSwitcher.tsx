import { Link, useLocation } from "react-router-dom";
import type { Language } from "../../data/copy";
import styles from "./LanguageSwitcher.module.css";

interface Props {
  currentLang: Language;
}

export default function LanguageSwitcher({ currentLang }: Props) {
  const location = useLocation();
  const targetLang = currentLang === "zh" ? "en" : "zh";
  const targetPath = location.pathname.replace(/^\/(zh|en)/, `/${targetLang}`);

  return (
    <div className={styles.switcher}>
      <Link
        to={currentLang === "zh" ? location.pathname : targetPath}
        className={`${styles.pill} ${currentLang === "zh" ? styles.active : ""}`}
      >
        中文
      </Link>
      <Link
        to={currentLang === "en" ? location.pathname : targetPath}
        className={`${styles.pill} ${currentLang === "en" ? styles.active : ""}`}
      >
        English
      </Link>
    </div>
  );
}
