"use client";

import NewNavBar from "@/sections/NewNavBar";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { careersData } from "@/utils/helpers";
import FooterMain from "@/sections/FooterMain";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import EnquiryForm from "@/components/Enquiry";
import EVerifyBtn from "@/components/EVerifyBtn";

const CareersPage = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main id="Technotran Careers">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Careers Landing Img"
          className={styles.careersMainContainer}
        >
          <Image
            src="/images/careers-banner-image.png"
            alt="Careers Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.careersLandingImg}
          />
        </section>
        <section id="Careers Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Welcome to the Technotran Careers Page!
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              Join our dynamic team and become part of an innovative company
              dedicated to revolutionizing education and technology.
            </motion.h3>
          </div>
        </section>
        <section id="Careers Content Section" className={styles.contentSection}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Discover Opportunities at Technotran
          </motion.h2>
          <div className={styles.careersContainer}>
            {careersData.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
                key={index}
                className={styles.card}
              >
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  {item.title}
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  {item.desc}
                </h3>
                <a
                  href="#Workshops-Enquiry"
                  className={`${styles.knowMoreBtn} quicksand-text`}
                >
                  Enquire
                </a>
              </motion.div>
            ))}
          </div>
        </section>
        <section
          id="Careers Enquiry Section"
          className={styles.enquiryContainer}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.4 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Careers Enquiry
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

export default CareersPage;
