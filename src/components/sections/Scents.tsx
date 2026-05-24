import { products } from "../../data/products";
import type { Language, CopyData } from "../../data/copy";
import ScentCard from "./ScentCard";

interface Props {
  copy: CopyData;
  lang: Language;
}

function getStyle(isEn: boolean, isZh: boolean, enVal: string | undefined, zhVal: string | undefined): React.CSSProperties | undefined {
  if (isEn && enVal) return { marginTop: enVal };
  if (isZh && zhVal) return { marginTop: zhVal };
  return undefined;
}

export default function Scents({ copy, lang }: Props) {
  const isEn = lang === "en";
  const isZh = lang === "zh";

  return (
    <div id="scents">
      <ScentCard
        product={products[0]}
        imageSrc="/images/1.jpg"
        align="left"
        imageStyle={isEn ? { marginTop: "-10px" } : undefined}
        titleStyle={isZh ? { marginLeft: "auto", marginRight: "510px", textAlign: "left" } : undefined}
        textStyle={isEn ? { marginTop: "-10px" } : isZh ? { marginLeft: "-30px" } : undefined}
        viewNotesLabel={copy.scents.viewNotes}
        exploreLabel={copy.scents.exploreScent}
        notesLabel={copy.scents.notes}
        usageSceneLabel={copy.scents.usageScene}
        lang={lang}
      />

      <ScentCard
        product={products[1]}
        imageSrc="/images/2.jpg"
        align="right"
        multiline
        textStyle={isEn ? { marginTop: "105px", marginLeft: "35px" } : isZh ? { marginTop: "-190px", marginLeft: "30px" } : undefined}
        titleStyle={isZh ? { marginLeft: "-80px", marginTop: "-220px" } : isEn ? { marginLeft: "-785px" } : undefined}
        imageStyle={isEn ? { marginTop: "-135px" } : isZh ? { marginTop: "-20px" } : undefined}
        viewNotesLabel={copy.scents.viewNotes}
        exploreLabel={copy.scents.exploreScent}
        notesLabel={copy.scents.notes}
        usageSceneLabel={copy.scents.usageScene}
        lang={lang}
      />

      <ScentCard
        product={products[2]}
        imageSrc="/images/3.jpg"
        align="left"
        multiline
        titleAlign="right"
        titleStyle={isEn ? { marginTop: "-145px" } : isZh ? { marginRight: "680px", marginTop: "-230px" } : undefined}
        imageStyle={isEn ? { marginTop: "-145px" } : isZh ? { marginTop: "-10px" } : undefined}
        textStyle={isEn ? { marginTop: "105px" } : isZh ? { marginTop: "-190px", marginLeft: "-30px" } : undefined}
        viewNotesLabel={copy.scents.viewNotes}
        exploreLabel={copy.scents.exploreScent}
        notesLabel={copy.scents.notes}
        usageSceneLabel={copy.scents.usageScene}
        lang={lang}
      />
    </div>
  );
}
