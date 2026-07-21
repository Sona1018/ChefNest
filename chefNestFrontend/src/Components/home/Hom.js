import GalleryWithState from "./Galle";
import SkillIndiaSection from "./Section";
import Carousel2 from "./Slider2";

import StatsSection from "./StatsSection";
import Testimonials from "./Testimon";
import Work from "./Work";
import Pricing from "./Pricing";
import WhyChooseUs from "./WhyChoose";

const Hom = () => {
  return (
    <div>
      <Carousel2 />

      <Pricing />

      <GalleryWithState />

      <WhyChooseUs />

      <Work />

      <StatsSection />

      <Testimonials />

      <SkillIndiaSection />
    </div>
  );
};

export default Hom;