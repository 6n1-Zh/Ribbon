import { copy } from "../data/copy";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Scents from "../components/sections/Scents";
import WhyRibbon from "../components/sections/WhyRibbon";
import ContactUs from "../components/sections/ContactUs";

export default function EnHome() {
  const c = copy.en;

  return (
    <div data-lang="en">
      <Nav copy={c} currentLang="en" />
      <main>
        <Hero slogan={c.hero.slogan} storyTrigger={c.hero.storyTrigger} />
        <Scents copy={c} lang="en" />
        <WhyRibbon copy={c} />
        <ContactUs lang="en" />
      </main>
      <Footer copyright={c.footer.copyright} />
    </div>
  );
}
