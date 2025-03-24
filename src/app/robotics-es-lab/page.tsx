"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/Enquiry";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const RoboticsEsLabPage = () => {
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
    <main id="Technotran Robotics & ES Lab">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Robotics & ES Lab Landing Img"
          className={styles.roboticsEsLabMainContainer}
        >
          <Image
            src="/images/Robotics-and-ES-Lab-banner-img.jpg"
            alt="Robotics & ES Lab Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.roboticsEsLabLandingImg}
          />
        </section>
        <section id="Robotics & ES Lab Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Robotics and Embedded system LAB
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
                At Technotran, we believe in the transformative power of
                hands-on learning. Our Robotics & Embedded Systems Lab, tailored
                specifically for colleges, is a testament to this belief,
                offering students a dynamic platform to bridge theoretical
                knowledge with real-world applications.
              </motion.h3>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/Robotics-ES-lab-1.png?raw=true"
                }
                alt={"Robotics & ES Lab Img 1"}
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
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
                Advanced Robotic Platforms
              </h2>
              <h3
                style={{ color: "white" }}
                className={`${styles.cardDesc} quicksand-text`}
              >
                Drawing from the cutting-edge realm of Advanced Robotics, our
                lab boasts a versatile selection of robotic systems. This rich
                environment provides students with the opportunity to
                investigate and experiment with a vast range of robotic
                innovations, spanning from foundational constructs to complex
                autonomous entities.
              </h3>
            </div>
            <div className={styles.card}>
              <h2
                style={{ color: "white" }}
                className={`${styles.cardTitle} josefin-sans-text`}
              >
                Collaborative Design Studios
              </h2>
              <h3
                style={{ color: "white" }}
                className={`${styles.cardDesc} quicksand-text`}
              >
                Open-concept areas that encourage interdisciplinary
                collaboration, ideation, and project execution, fostering a
                community of innovation.
              </h3>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h2
                style={{ color: "white" }}
                className={`${styles.cardTitle} josefin-sans-text`}
              >
                Comprehensive Embedded Systems Environment
              </h2>
              <h3
                style={{ color: "white" }}
                className={`${styles.cardDesc} quicksand-text`}
              >
                Featuring a range of microcontrollers, IoT devices, and
                interfacing modules, students can design and prototype intricate
                embedded solutions.
              </h3>
            </div>
            <div className={styles.card}>
              <h2
                style={{ color: "white" }}
                className={`${styles.cardTitle} josefin-sans-text`}
              >
                Real-World Simulation Areas
              </h2>
              <h3
                style={{ color: "white" }}
                className={`${styles.cardDesc} quicksand-text`}
              >
                Spaces dedicated to replicating real-world challenges, ensuring
                that student projects are not just functional but also viable in
                real-life scenarios.
              </h3>
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
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/Robotics-and-ES-Lab-img.png?raw=true"
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
                  <strong>Modernized Curriculum: </strong>Integrate cutting-edge
                  robotics and embedded systems projects into academic syllabi,
                  ensuring relevancy and engagement.
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Empowerment Through Experience: </strong>Equip
                  students with tangible skills, making them attractive
                  prospects for top-tier tech companies and research
                  institutions.
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Research Excellence: </strong>Provide faculty and
                  students with the tools and environment to undertake
                  groundbreaking research initiatives.
                </motion.h3>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${styles.sectionTxt} quicksand-text`}
                >
                  <strong>Inter-departmental Synergy: </strong>Create
                  opportunities for collaboration between electronics, computer
                  science, mechanical engineering, and design faculties.
                </motion.h3>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Robotics & ES Lab Enquiry Section"
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

export default RoboticsEsLabPage;
