import { contact } from "../../data/team";
import styles from "./ContactUs.module.css";

interface Props {
  lang: "zh" | "en";
}

const copyData = {
  zh: {
    founders: "创始人",
    contactUs: "联系我们",
    email: "邮箱",
    purchaseFrom: "购买渠道",
  },
  en: {
    founders: "Founders",
    contactUs: "Contact Us",
    email: "Email",
    purchaseFrom: "Purchase Here",
  },
};

export default function ContactUs({ lang }: Props) {
  const t = copyData[lang];

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.topBlock}>
        <h2 className={styles.brandName}>Ribbon</h2>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottomBlock}>
        <div className={styles.leftCol}>
          <p className={styles.subtitle}>{t.founders}</p>
          <p className={styles.founderNames}>
            <span>Miho &</span>
            <span>Katrina</span>
          </p>
        </div>

        <div className={styles.vertDivider} />

        <div className={styles.rightCol}>
          <p className={styles.subtitle}>{t.contactUs}</p>
          <p className={styles.bodyText}>
            <span className={styles.label}>{t.email}:</span> {contact.email}
          </p>

          <p className={styles.subtitle}>{t.purchaseFrom}</p>
          <p className={styles.bodyText}>
            <span className={styles.label}>Xiaohongshu:</span>{" "}
            <a
              href="https://www.xiaohongshu.com/user/profile/5fbc85e70000000001007c90?xsec_token=AB3Q0d0L-aZwQIeydVoQmJkOpZG2JvOPkYw8c5-rAyJPw%3D&xsec_source=pc_search"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {contact.xiaohongshu}
            </a>
          </p>
        </div>
      </div>

      <div className={styles.divider} />
    </section>
  );
}
