import styles from "./page.module.css";
import Landing from "@/sections/Landing";
import InnovationLabsSection from "@/sections/InnovationLabs";
import WhyChooseUs from "@/sections/WhyChooseUs";
import TrainingServices from "@/sections/TrainingServices";
import DesignServices from "@/sections/DesignServices";
import IndustriesWeServe from "@/sections/IndustriesWeServe";
import OurValuedClients from "@/sections/OurValuedClients";
import Testimonials from "@/sections/Testimonials";
import FooterMain from "@/sections/FooterMain";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import EVerifyBtn from "@/components/EVerifyBtn";
import NewNavBar from "@/sections/NewNavBar";

export default function Home() {
  return (
    <main id="Home Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <Landing />
        <TrainingServices />
        <DesignServices />
        <WhyChooseUs />
        <InnovationLabsSection />
        <IndustriesWeServe />
        <OurValuedClients />
        <Testimonials />
      </div>
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
      <FooterMain />
    </main>
  );
}
