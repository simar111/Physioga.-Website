import Hero from "../components/HeroComponents/Hero";
import TrustStrip from "../components/HeroComponents/TrustStrip";
import HowItWorks from "../components/HeroComponents/HowItWorks";
import Services from "../components/HeroComponents/Services";
import AudienceSplit from "../components/HeroComponents/AudienceSplit";
import AboutWithWhatsAppCTA from "../components/HeroComponents/About";
import FAQSection from "../components/HeroComponents/Faq";
const Home = () => {
return(
    <>
    <section id="hero">
        <Hero />
      </section>

      <section id="trust">
        <TrustStrip />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="audience">
        <AudienceSplit />
      </section>

      <section id="about">
        <AboutWithWhatsAppCTA />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
    </>
)
}
export default Home;