"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import Image from "next/image";
import { motion } from "framer-motion";
import { industrialLabSolutions } from "@/utils/helpers";
import EnquiryForm from "@/components/Enquiry";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const IndustrialLabSolutions = () => {
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
    <main id="Technotran Industry Lab Solutions">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="About US Landing Img"
          className={styles.industrialLabSolMainContainer}
        >
          <Image
            src="/images/Industry-Lab-solutions-Banner-image.jpg"
            alt="Industrial Lab Solutions Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.industrialLabSolLandingImg}
          />
        </section>
        <section id="Industrial Lab Solutions Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Technotran Solutions is your PREMIER source for high quality
              laboratory and scientific Research Equipment & Instruments
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`We are pleased to introduce ourselves as one of the leading
              Distributors having a wide range of principles to meet each and
              every requirement for clients. Our company deals in various
              product ranges from Lab Instruments, Equipment's/Instruments,
              Laboratory GlassWare, Chromatography, Filtration Products for R &
              D centers, Pharmaceuticals and many others.`}
            </motion.h3>
          </div>
        </section>
        <section id="Industrial Lab Solutions Content Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Industries we serve
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.list}
            >
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Drinking Water
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Health & Medical
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Gas & Petroleum
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Testing Laboratories
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Research & Development
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>Power</li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Food & Beverages
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Chemical
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Cosmetics & Perfumes
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>Cement</li>
              <li className={`${styles.sectionTxt} quicksand-text`}>Pharma</li>
            </motion.ul>
          </div>
        </section>
        <section id="Industrial Lab Solutions Content">
          <div className={styles.sectionOne}>
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Our Products Portfolio
            </motion.h2>
            <div className={styles.contentContainer}>
              {industrialLabSolutions.map((item, index) => (
                <motion.div
                  className={styles.cardContainer}
                  key={index}
                  custom={index} // Pass index for staggered effect
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={styles.cardImgContainer}>
                    <Image
                      priority
                      src={item.imgSrc}
                      height={300}
                      width={300}
                      alt={`valued clients img${item.id}`}
                      className={styles.cardImg}
                    />
                  </div>
                  <div className={styles.cardSubContainer}>
                    <h2 className={`${styles.cardTxt} josefin-sans-text`}>
                      {item.title}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="Industrial Lab Solutions Enquiry Section">
          <div className={styles.enquiryContainer}>
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
          </div>
        </section>
      </div>
      <FooterMain />
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default IndustrialLabSolutions;
