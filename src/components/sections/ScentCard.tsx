import { useState } from "react";
import type { Product } from "../../data/products";
import styles from "./ScentCard.module.css";

interface Props {
  product: Product;
  imageSrc: string;
  align: "left" | "right";
  multiline?: boolean;
  titleAlign?: "left" | "center" | "right";
  imageStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  viewNotesLabel: string;
  exploreLabel: string;
  notesLabel: string;
  usageSceneLabel: string;
  lang: "zh" | "en";
}

export default function ScentCard({
  product,
  imageSrc,
  align,
  multiline,
  titleAlign,
  imageStyle,
  titleStyle,
  textStyle,
  viewNotesLabel,
  exploreLabel,
  notesLabel,
  usageSceneLabel,
  lang
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={styles.section}>
      <div className={`${styles.grid} ${align === "right" ? styles.imageRight : styles.imageLeft}`}>
        <div className={styles.imageCol}>
          <h2
            className={styles.title}
            style={{ textAlign: titleAlign, ...titleStyle }}
          >
            {multiline
              ? product.name[lang].split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < product.name[lang].split(" ").length - 1 && <br />}
                  </span>
                ))
              : product.name[lang]
            }
          </h2>

          <img
            src={imageSrc}
            alt={product.name[lang]}
            className={styles.image}
            style={imageStyle}
          />
        </div>

        <div className={`${styles.textCol} ${lang === "zh" && expanded ? styles.textColTop : ""}`}>
          <div className={styles.textBlock} style={textStyle}>
            {/* English: family hidden when expanded; Chinese: always shown */}
            {(lang === "zh" || !expanded) && (
              <p className={styles.family}>{product.family[lang]}</p>
            )}

            {/* English: description hidden when expanded; Chinese: always shown */}
            {(lang === "zh" || !expanded) && (
              <p className={styles.description}>{product.shortDescription[lang]}</p>
            )}

            {/* English: notes above button when expanded */}
            {lang === "en" && expanded && (
              <div className={styles.notesPanelEn}>
                <h4 className={styles.notesTitle}>{notesLabel}</h4>
                <div className={styles.notesList}>
                  {product.notes.map((note) => (
                    <span key={note.en} className={styles.noteTag}>
                      {note.en}
                    </span>
                  ))}
                </div>
                <h4 className={styles.notesTitle}>{usageSceneLabel}</h4>
                <p className={styles.usageScene}>{product.usageScene.en}</p>
              </div>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className={styles.viewNotesBtn}
            >
              {expanded ? exploreLabel : viewNotesLabel}
            </button>

            {/* Chinese: notes below button when expanded */}
            {lang === "zh" && expanded && (
              <div className={styles.notesPanel}>
                <h4 className={styles.notesTitle}>{notesLabel}</h4>
                <div className={styles.notesList}>
                  {product.notes.map((note) => (
                    <span key={note.en} className={styles.noteTag}>
                      {note.zh}
                    </span>
                  ))}
                </div>
                <h4 className={styles.notesTitle}>{usageSceneLabel}</h4>
                <p className={styles.usageScene}>{product.usageScene.zh}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
