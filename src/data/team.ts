export interface TeamMember {
  name: string;
  title: {
    zh: string;
    en: string;
  };
}

export interface ContactInfo {
  xiaohongshu: string;
  email: string;
}

export const members: TeamMember[] = [
  {
    name: "Miho",
    title: {
      zh: "创始人",
      en: "Founder"
    }
  },
  {
    name: "Katrina",
    title: {
      zh: "创始人",
      en: "Founder"
    }
  }
];

export const contact: ContactInfo = {
  xiaohongshu: "Ribbon 缎礼",
  email: "mihokobayaashi@163.com"
};
