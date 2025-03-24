"use client";

import NewNavBar from "@/sections/NewNavBar";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import EnquiryForm from "@/components/Enquiry";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const IotLabPage = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main id="Technotran IOT Lab">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="IOT Lab Landing Img"
          className={styles.iotLabMainContainer}
        >
          <Image
            src="/images/iot-banner-img.png"
            alt="IOT Lab Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.iotLabLandingImg}
          />
        </section>
        <section id="IOT Lab Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              IOT LAB
            </motion.h2>
            <div className={styles.textContainer}>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                className={`${styles.sectionTxt} quicksand-text`}
                style={{ padding: "0 1rem", maxWidth: "50%" }}
              >
                Step into the interconnected world of the Internet of Things
                (IoT) with Technotran. Our IoT Lab Solutions are designed to
                empower businesses, researchers, and enthusiasts to harness the
                potential of connected devices, driving innovation and
                efficiency in a hyper-connected era.
              </motion.h3>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/IOT-LAB.png?raw=true"
                }
                alt={"ATAL Tinkering Lab Img 1"}
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
        </section>
        <section id="IOT Lab Content Section" className={styles.contentSection}>
          <div className={styles.iotContainer}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.3 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              What We Deliver
            </motion.h2>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Holistic IoT Lab Configurations
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  From the nuances of sensor deployment to the vast expanse of
                  cloud-based data management, we curate a cohesive IoT lab
                  experience, tailored to your vision.
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Robust Development Platforms
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Empower your ideas with workstations fortified with premier
                  IoT development ecosystems, ensuring seamless transitions from
                  ideation to implementation.
                </h3>
              </div>
            </div>
            <Image
              src={
                "https://github.com/CVSCharan/Technotran_Assets/blob/main/IOT-LAB-1.png?raw=true"
              }
              alt={"IOT Lab Img 2"}
              height={400}
              width={600}
              priority
              className={styles.imgThree}
            />
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Adaptive Lab Layouts
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Every space tells a story. We design layouts that not only
                  optimize space but also narrate the tale of interconnected
                  technology.
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Scenario-Centric Test Beds
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Experience the real-world implications of IoT solutions within
                  our simulation zones, meticulously crafted to mirror actual
                  scenarios.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="IOT Lab Content" className={styles.contentSection}>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              {`Why Technotran's IoT Hub Stands Out`}
            </motion.h2>
            <div className={styles.textContainer}>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/IOT-LAB-2.jpg?raw=true"
                }
                alt={"IOT Lab Img 2"}
                height={400}
                width={600}
                priority
                className={styles.imgTwo}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Experiential Learning Curve: </strong>Engage with IoT
                  in its raw essence, facilitated by workshops and hands-on
                  modules.
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Pinnacle of Tech Evolution: </strong>Our labs resonate
                  with the latest technological strides in the IoT domain,
                  ensuring you’re always a step ahead.
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Synergy Spaces: </strong>Ideate, collaborate, and
                  manifest in environments that breathe creativity and
                  cooperation.
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Innovation Incubator: </strong>Our labs are more than
                  spaces; they’re cradles for your next big IoT breakthrough.
                </motion.h3>
              </div>
            </div>
          </div>
        </section>
        <section
          id="IOT Lab Enquiry Section"
          className={styles.enquiryContainer}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.4 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Enquiry Form
          </motion.h2>
          <EnquiryForm />
        </section>
      </div>
      <FooterMain />
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default IotLabPage;
