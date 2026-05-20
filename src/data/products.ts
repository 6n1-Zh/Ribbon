export interface ScentNote {
  zh: string;
  en: string;
}

export interface Product {
  id: string;
  name: {
    zh: string;
    en: string;
  };
  family: {
    zh: string;
    en: string;
  };
  notes: ScentNote[];
  description: {
    zh: string;
    en: string;
  };
  shortDescription: {
    zh: string;
    en: string;
  };
  mood: {
    zh: string[];
    en: string[];
  };
  usageScene: {
    zh: string;
    en: string;
  };
}

export const products: Product[] = [
  {
    id: "forest-elixir",
    name: {
      zh: "深林秘酿",
      en: "Forest Elixir"
    },
    family: {
      zh: "莓果 / 玫瑰 / 木质 / 琥珀 / 麝香",
      en: "Berry / Rose / Woody / Amber / Musk"
    },
    notes: [
      { zh: "黑醋栗", en: "Blackcurrant" },
      { zh: "杜松子", en: "Juniper" },
      { zh: "莓子", en: "Berries" },
      { zh: "玫瑰", en: "Rose" },
      { zh: "覆盆子", en: "Raspberry" },
      { zh: "愈创木", en: "Guaiac Wood" },
      { zh: "麝香", en: "Musk" },
      { zh: "琥珀", en: "Amber" }
    ],
    description: {
      zh: "黑醋栗撞开杜松子果的清冽，莓子、玫瑰、覆盆子在林间漫溢，末了，愈创木、麝香、琥珀裹着余韵，像暮色漫染深林，每缕香都藏着自然私语。",
      en: "Blackcurrant breaks open the crisp clarity of juniper berries, while berries, rose, and raspberry drift through the forest air. Finally, guaiac wood, musk, and amber wrap the lingering trail, like dusk slowly spreading through a deep forest. Every trace of scent carries a quiet whisper of nature."
    },
    shortDescription: {
      zh: "黑醋栗与杜松子的清冽先行，莓果、玫瑰与覆盆子在林间漫开，最后由愈创木、麝香与琥珀收束，像暮色落入深林。",
      en: "A deep forest scent of blackcurrant, berries, rose, woods, musk, and amber, like dusk falling softly into the trees."
    },
    mood: {
      zh: ["神秘", "森林", "莓果", "暮色", "浪漫", "深邃", "静谧"],
      en: ["mysterious", "forest", "berry", "dusk", "romantic", "deep", "quiet"]
    },
    usageScene: {
      zh: "适合夜晚放松、阅读、写日记，或在忙碌都市生活后，让自己回到安静、私密、像森林一样的空间。",
      en: "Best for evening relaxation, reading, journaling, or returning to a quiet forest-like space after the noise of city life."
    }
  },
  {
    id: "whispering-blooms",
    name: {
      zh: "风吟花语",
      en: "Whispering Blooms"
    },
    family: {
      zh: "花香 / 绿意 / 麝香 / 琥珀",
      en: "Floral / Green / Musk / Amber"
    },
    notes: [
      { zh: "风铃草", en: "Bluebell" },
      { zh: "公丁香", en: "Clove" },
      { zh: "茉莉", en: "Jasmine" },
      { zh: "铃兰", en: "Lily of the Valley" },
      { zh: "野玫瑰果", en: "Wild Rosehip" },
      { zh: "麝香", en: "Musk" },
      { zh: "琥珀", en: "Amber" }
    ],
    description: {
      zh: "风铃草与公丁香率先摇响春日铃音，茉莉、铃兰、野玫瑰果在风里轻绽，末了，麝香、琥珀将余韵收进温柔暮色，似有微风卷着花香，漫过整片春日原野。",
      en: "Bluebell and clove first ring like spring bells, while jasmine, lily of the valley, and wild rosehip bloom gently in the breeze. Finally, musk and amber gather the lingering notes into a tender dusk, as if a soft wind carries floral fragrance across an entire spring field."
    },
    shortDescription: {
      zh: "风铃草与公丁香开启春日气息，茉莉、铃兰与野玫瑰果在风中轻轻绽放，尾调由麝香与琥珀收进温柔暮色。",
      en: "A light floral scent of bluebell, jasmine, lily of the valley, musk, and amber, like a spring breeze moving through flowers."
    },
    mood: {
      zh: ["春日", "花香", "轻盈", "温柔", "女性", "清新", "柔软"],
      en: ["spring", "floral", "airy", "gentle", "feminine", "fresh", "soft"]
    },
    usageScene: {
      zh: "适合白天、卧室、自我护理、春日清晨，或任何想让空间变得轻盈、温柔、明亮的时刻。",
      en: "Best for daytime rituals, bedroom atmosphere, self-care routines, spring mornings, or any moment that needs a lighter, softer, and brighter mood."
    }
  },
  {
    id: "sandalwood-reverie",
    name: {
      zh: "檀木叙",
      en: "Sandalwood Reverie"
    },
    family: {
      zh: "辛香 / 花香 / 木质 / 树脂 / 麝香",
      en: "Spicy / Floral / Woody / Resin / Musk"
    },
    notes: [
      { zh: "肉桂", en: "Cinnamon" },
      { zh: "葛缕子", en: "Caraway" },
      { zh: "茉莉", en: "Jasmine" },
      { zh: "依兰", en: "Ylang-Ylang" },
      { zh: "玫瑰", en: "Rose" },
      { zh: "麝香", en: "Musk" },
      { zh: "檀香木", en: "Sandalwood" },
      { zh: "雪松", en: "Cedarwood" },
      { zh: "安息香脂", en: "Benzoin" },
      { zh: "乌木", en: "Ebony" },
      { zh: "沉香", en: "Agarwood" }
    ],
    description: {
      zh: "肉桂、葛缕子等辛香料率先破开东方帷幕，茉莉、依兰、玫瑰悄然晕染，末了，麝香、檀香木携雪松、安息香脂、乌木沉香沉降，似千年古檀在秘境缓缓诉说。",
      en: "Cinnamon, caraway, and other spices first open an oriental curtain, while jasmine, ylang-ylang, and rose quietly unfold. Finally, musk and sandalwood descend with cedarwood, benzoin, ebony, and agarwood, like ancient sandalwood slowly telling its story in a hidden sanctuary."
    },
    shortDescription: {
      zh: "肉桂与葛缕子先行，茉莉、依兰与玫瑰缓缓晕染，最终由麝香、檀香木、雪松、安息香脂与沉香沉降，像古檀在秘境低声叙说。",
      en: "A warm woody scent of spice, flowers, sandalwood, cedar, benzoin, ebony, and agarwood, like an ancient story told in candlelight."
    },
    mood: {
      zh: ["木质", "温暖", "东方", "神秘", "成熟", "沉静", "冥想"],
      en: ["woody", "warm", "oriental", "mysterious", "mature", "grounding", "meditative"]
    },
    usageScene: {
      zh: "适合夜晚、冥想、独处、深度工作，或任何想让空间沉静、温暖、有力量的时刻。",
      en: "Best for night rituals, meditation, solitude, deep work, or any moment that needs a calm, warm, and grounded atmosphere."
    }
  }
];
