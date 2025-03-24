"use client";

import NewNavBar from "@/sections/NewNavBar";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/Enquiry";
import FooterMain from "@/sections/FooterMain";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import EVerifyBtn from "@/components/EVerifyBtn";

const AtalTinkeringLabPage = () => {
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
    <main id="Tecnotran ATAL Tinkering Lab">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="School Robotics Lab Landing Img"
          className={styles.atalTinkeringLabMainContainer}
        >
          <Image
            src="/images/Banner-img-ATAL-Tinkering-Lab.png"
            alt="School Robotics Lab Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.atalTinkeringLabLandingImg}
          />
        </section>
        <section id="ATAL Tinkering Lab Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Atal Tinkering Lab (ATL) by Technotran
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
                Technotran proudly presents our Atal Tinkering Lab (ATL)
                initiative, a This ATL serves as a beacon of innovation,
                providing young minds with a platform to tinker, innovate, and
                transform their ideas into reality.
              </motion.h3>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/ATAL-Tinkering-Lab-img1.png?raw=true"
                }
                alt={"ATAL Tinkering Lab Img 1"}
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
          <div
            className={styles.sectionOne}
            style={{
              background: "linear-gradient(90deg, #4b0406, #6b0f12, #a82b30)",
            }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ color: "white" }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Our Vision
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              style={{ color: "white" }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              At Technotran, we envision a future where young innovators are at
              the forefront of technological advancements. Our ATL is a step
              towards molding the next generation of thinkers, creators, and
              problem solvers.
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
              {`Features of Technotran's ATL`}
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>State-of-the-Art Equipment: </strong>Our lab boasts the
              latest tools and technologies, from 3D printers to robotics kits,
              ensuring students have everything they need to bring their ideas
              to life.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Mentorship: </strong>With a team of experienced mentors
              from Technotran, students are guided through their innovation
              journey, receiving valuable insights, feedback, and encouragement.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Workshops & Training: </strong>Technotran regularly
              conducts sessions introducing students to new technologies,
              methodologies, and essential skills.
            </motion.h3>
          </div>
        </section>
        <section
          id="School Robotics Lab Enquiry Section"
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

export default AtalTinkeringLabPage;
