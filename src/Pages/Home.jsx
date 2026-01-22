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
    <Hero />
    <TrustStrip />
    <HowItWorks />
    <Services />
    <AudienceSplit />
    <AboutWithWhatsAppCTA />
    <FAQSection />
    </>
)
}
export default Home;