"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/Enquiry";
import FooterMain from "@/sections/FooterMain";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import EVerifyBtn from "@/components/EVerifyBtn";

const CenterOfExcellencePage = () => {
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
    <main id="Technotran COE">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section id="COE Landing Img" className={styles.coeMainContainer}>
          <Image
            src="/images/Banner-CoE.png"
            alt="COE Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.coeLandingImg}
          />
        </section>
        <section id="COE Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              {`Technotran's Center of Excellence (COE)`}
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              Welcome to the Center of Excellence (CoE) at Technotran, the
              epicenter of technological innovation and advanced learning. Our
              CoE is dedicated to pushing the boundaries in various cutting-edge
              domains, ensuring Technotran remains at the forefront of
              technological advancements.
            </motion.h3>
          </div>
          <div
            style={{
              background: "linear-gradient(90deg, #4b0406, #6b0f12, #a82b30)",
            }}
            className={styles.sectionOne}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ color: "white" }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Our Commitment
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              style={{ color: "white" }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              At Technotran, our Center of Excellence is more than just a hub of
              technology; it’s our commitment to shaping the future. Through
              rigorous research, hands-on training, and industry collaborations,
              we aim to make significant contributions to the world of
              technology and beyond.
            </motion.h3>
          </div>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Domains of Excellence & Lab Setups
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Robotics: </strong>Dive into our Robotics Lab, where we
              explore, design, and innovate robots that can assist, enhance, and
              revolutionize various sectors.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Embedded Systems: </strong>Our Embedded Systems Lab delves
              deep into specialized computing systems, optimizing performance
              and functionality for specific applications.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>IoT (Internet of Things): </strong>At the IoT Lab, connect
              and innovate with a vast network of devices, creating smarter
              environments and enhancing everyday experiences.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>AI (Artificial Intelligence): </strong>The AI Lab
              harnesses the power of machine learning and cognitive computing to
              develop intelligent systems capable of human-like reasoning and
              decision-making. 3D-Printing: Our 3D-Printing Lab transforms ideas
              into tangible objects, revolutionizing manufacturing, prototyping,
              and design processes.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Mechatronics: </strong>The Mechatronics Lab offers a
              synergistic blend of mechanical engineering, electronics, and
              computer science, driving the creation of intelligent systems and
              advanced automation.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Drone Technology: </strong>Soar to new heights with our
              Drone Technology Lab, focusing on research and innovations in
              unmanned aerial vehicles.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Laser Cutting: </strong>Precision meets creativity in our
              Laser Cutting Studio, crafting intricate designs and components
              using advanced laser technology.
            </motion.h3>
          </div>
          <div
            style={{
              background: "linear-gradient(90deg, #4b0406, #6b0f12, #a82b30)",
            }}
            className={styles.sectionOne}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
              style={{ color: "white" }}
            >
              Engage with Our CoE:
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
              style={{ color: "white" }}
            >
              Whether you’re a student, researcher, industry expert, or tech
              enthusiast, Technotran’s CoE offers a plethora of opportunities.
              From workshops to collaborative projects, there’s always something
              innovative happening here.
            </motion.h3>
          </div>
        </section>
        <section id="COE Enquiry Section" className={styles.enquiryContainer}>
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

export default CenterOfExcellencePage;
