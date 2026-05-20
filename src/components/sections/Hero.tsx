import PillButton from "../ui/PillButton";
import styles from "./Hero.module.css";

interface Props {
  slogan: string;
  storyTrigger: string;
}

export default function Hero({ slogan, storyTrigger }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.brandName}>RIBBON</h1>

        <div className={styles.imageWrapper}>
          <img
            src="/images/new.png"
            alt="Ribbon candle"
            className={styles.image}
          />
        </div>

        <p className={styles.slogan}>{slogan}</p>

        <div className={styles.cta}>
          <PillButton href="#scents" variant="outline">
            {storyTrigger}
          </PillButton>
        </div>
      </div>
    </section>
  );
}
