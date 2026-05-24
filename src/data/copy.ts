export type Language = "zh" | "en";

export interface CopyData {
  nav: {
    scents: string;
    whyRibbon: string;
    contact: string;
  };
  languageSwitcher: {
    zh: string;
    en: string;
  };
  hero: {
    slogan: string;
    storyTrigger: string;
  };
  scents: {
    title: string;
    subtitle: string;
    viewNotes: string;
    exploreScent: string;
    scentFamily: string;
    notes: string;
    usageScene: string;
  };
  whyRibbon: {
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      description: string;
    }[];
  };
  contactUs: {
    title: string;
    subtitle: string;
    socialLabel: string;
    emailLabel: string;
  };
  footer: {
    copyright: string;
  };
  brandStory: {
    title: string;
    content: string;
    intro: string;
    oneLiner: string;
  };
}

const zh: CopyData = {
  nav: {
    scents: "香气",
    whyRibbon: "为什么选择Ribbon",
    contact: "联系我们"
  },
  languageSwitcher: {
    zh: "中文",
    en: "English"
  },
  hero: {
    slogan: "bold flames and good vibes.",
    storyTrigger: "探索品牌故事"
  },
  scents: {
    title: "香气",
    subtitle: "每一缕香气，都是一段故事",
    viewNotes: "查看香调",
    exploreScent: "探索香气",
    scentFamily: "香调家族",
    notes: "香调笔记",
    usageScene: "使用场景"
  },
  whyRibbon: {
    title: "为什么选择Ribbon",
    subtitle: "不止是一支蜡烛，更是一种生活态度",
    pillars: [
      {
        title: "艺术香气，格调生活",
        description: "拒绝廉价工业感，采用沙龙级调香工艺，搭配美术馆级视觉设计，每一缕香气、每一处细节，都彰显着独特品味。"
      },
      {
        title: "创意延续，环保新生",
        description: "精致烛杯在燃尽后仍焕发新生，可化身个性笔筒、精美收纳盒，为生活增添别样趣味，践行环保理念。"
      },
      {
        title: "自然纯净，安心之选",
        description: "采用大豆蜡与植物精油配方，燃烧时纯净少黑烟，宠物友好。"
      }
    ]
  },
  contactUs: {
    title: "联系我们",
    subtitle: "关注我们，了解更多香气故事",
    socialLabel: "小红书",
    emailLabel: "联系邮箱"
  },
  footer: {
    copyright: "© 2025 Ribbon 缎礼. All rights reserved."
  },
  brandStory: {
    title: "品牌故事",
    content: "在都市生活的喧嚣与焦灼之中，每个人都渴望寻得一方宁静，找回内心的平衡与安宁。Ribbon 香薰蜡烛品牌致力于为珍视生活仪式感的人们，在日常的琐碎中点亮治愈与美好的瞬间。氤氲的香气缓缓散开，抚平你焦躁的情绪，让你在自己的小天地中学会自我珍视。Ribbon，这一充满魅力的元素，兼具时尚、多变与可爱的特质。它可以柔软，可以坚韧，象征着自由与无限可能。Ribbon 品牌希望每一位使用者都能从中汲取力量，找到自信、活力与随心的生活态度，勇敢且热情地拥抱生活。",
    intro: "Ribbon 是一个以香气与烛光创造生活仪式感的香薰蜡烛品牌。我们相信，一支蜡烛不只是气味产品，也可以是一种情绪出口、一份温柔礼物，以及都市生活中重新靠近自己的方式。",
    oneLiner: "点燃 Ribbon，让香气替你收藏日常里的柔软、勇气与好心情。"
  }
};

const en: CopyData = {
  nav: {
    scents: "Our Scents",
    whyRibbon: "Why Ribbon",
    contact: "Contact Us"
  },
  languageSwitcher: {
    zh: "中文",
    en: "English"
  },
  hero: {
    slogan: "bold flames and good vibes.",
    storyTrigger: "Discover Our Story"
  },
  scents: {
    title: "Our Scents",
    subtitle: "Every fragrance tells a story",
    viewNotes: "View Notes",
    exploreScent: "Explore Scent",
    scentFamily: "Scent Family",
    notes: "Notes",
    usageScene: "Usage Scene"
  },
  whyRibbon: {
    title: "Why Ribbon",
    subtitle: "More than a candle — a way of living",
    pillars: [
      {
        title: "Artistic Fragrance, Elevated Living",
        description: "Ribbon rejects cheap industrial fragrance. With salon-level fragrance craftsmanship and art-gallery-level visual design, every note and every detail expresses a distinctive sense of taste."
      },
      {
        title: "Creative Reuse, Sustainable Afterlife",
        description: "After the candle burns out, the delicate vessel can be reborn as a personal pen holder or an elegant storage container, adding playful function to everyday life while practicing a more sustainable lifestyle."
      },
      {
        title: "Natural, Clean, and Comforting",
        description: "Ribbon uses soy wax and plant-based essential oil formulas. It burns cleanly with less black smoke and is positioned as pet-friendly."
      }
    ]
  },
  contactUs: {
    title: "Contact Us",
    subtitle: "Follow us for more fragrance stories",
    socialLabel: "Xiaohongshu",
    emailLabel: "Email"
  },
  footer: {
    copyright: "© 2025 Ribbon 缎礼. All rights reserved."
  },
  brandStory: {
    title: "Brand Story",
    content: "Amid the noise, pressure, and restlessness of urban life, everyone longs to find a quiet corner where they can restore inner balance and peace. Ribbon is a scented candle brand created for people who cherish daily rituals, lighting up healing and beautiful moments within the small details of everyday life. As the fragrance slowly unfolds, it softens anxious emotions and allows you to rediscover self-cherishing within your own private space. Ribbon, as a charming visual and symbolic element, carries qualities of fashion, flexibility, and cuteness. It can be soft, and it can also be resilient. It represents freedom and infinite possibility. Ribbon hopes every user can draw strength from it, finding confidence, vitality, and a spontaneous attitude toward life, embracing the world with courage and passion.",
    intro: "Ribbon is a scented candle brand that creates daily rituals through fragrance and flame. We believe a candle is not only a scent product, but also an emotional outlet, a tender gift, and a way to return to yourself within urban life.",
    oneLiner: "Light Ribbon, and let fragrance hold the softness, courage, and good vibes of everyday life."
  }
};

export const copy: Record<Language, CopyData> = { zh, en };
