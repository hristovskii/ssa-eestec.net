import EESTEC from "./components/Eestec";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Promo from "./components/Promo";
import Sponsors from "./components/Sponsors";
import Statistics from "./components/Statistics";
import Events from "./components/Cities";
import Organizators from "./components/organizators";
import ContactUs from "./components/contactUs";
import AboutEestec from "./components/aboutEestec";
import AboutSSA from "./components/aboutSSA";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Organizators></Organizators>
      <AboutSSA></AboutSSA>
      <KeyFeatures></KeyFeatures>
      <EESTEC></EESTEC>
      <Statistics></Statistics>
      <Events></Events>
      <AboutEestec></AboutEestec>
      <Sponsors></Sponsors>
      {/* <Promo></Promo> */}
      <ContactUs></ContactUs>
    </>
  );
}