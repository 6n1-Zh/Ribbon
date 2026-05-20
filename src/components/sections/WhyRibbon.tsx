import type { CopyData } from "../../data/copy";
import Section from "../ui/Section";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./WhyRibbon.module.css";

interface Props {
  copy: CopyData;
}

export default function WhyRibbon({ copy }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <Section id="why-ribbon" background="pink">
      <div
        ref={ref}
        className={`animate-on-scroll ${isVisible ? "visible" : ""}`}
      >
        <h2 className={`section-title ${styles.title}`}>{copy.whyRibbon.title}</h2>
        <p className={`section-subtitle ${styles.subtitle}`}>{copy.whyRibbon.subtitle}</p>

        <div className={styles.grid}>
          {copy.whyRibbon.pillars.map((pillar, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.number}>{i + 1}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
