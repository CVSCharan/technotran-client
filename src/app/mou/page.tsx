"use client";

import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import FooterMain from "@/sections/FooterMain";
import { motion } from "framer-motion";
import { mouData } from "@/utils/helpers";
import EVerifyBtn from "@/components/EVerifyBtn";

const MOUPage = () => {
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

  const imageVariant = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main id="MOU Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="MOU Landing Img"
          className={styles.mouMainContainer}
        >
          <Image
            src="/images/mou.png"
            alt="MOU Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.mouLandingImg}
          />
        </section>
        <section id="MOU Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              MOU
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`Technotran is committed to fostering collaborative partnerships with organizations that share our vision of advancing technology education and innovation. Our Memorandum of Understanding (MOU) outlines the terms and conditions of collaboration between Technotran and partnering entities, establishing a framework for cooperation and support in achieving shared objectives.`}
            </motion.h3>
          </div>
        </section>
        <section id="MOU Content Section" className={styles.gallerySection}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: true, amount: 0.4 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Mou with Institutions
          </motion.h2>
          <div className={styles.galleryContainer}>
            {mouData.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
                key={item.id}
                className={styles.galleryItem}
              >
                <Image
                  src={item.imgSrc}
                  height={200}
                  width={200}
                  priority
                  alt={`MOU Img${index}`}
                  className={styles.galleryImage}
                />
                <div className={styles.galleryCaption}>
                  <h2 className="quicksand-text">{item.name}</h2>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <motion.section
          id="MOU Commitment Section"
          className={styles.mouContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when section is in the viewport
        >
          <div className={styles.mouSubContainer}>
            <motion.div
              className={styles.mouImgContainer}
              variants={imageVariant}
            >
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/commitment.png?raw=true"
                alt="MOU Commitment Img"
                className={styles.mouImg}
                height={700}
                width={700}
                priority
              />
            </motion.div>
            <motion.div
              className={styles.mouContentContainer}
              variants={contentVariant}
            >
              <h2 className={`${styles.mouTitle} josefin-sans-text`}>
                Commitment
              </h2>
              <h3 className={`${styles.mouDesc} quicksand-text`}>
                {`Technotran is committed to upholding the terms of this Memorandum
              of Understanding and working collaboratively with partner
              organizations to achieve shared goals and objectives. Through
              sustained cooperation and mutual support, we aim to make
              significant contributions to technology education, research, and
              innovation for the benefit of society.`}
              </h3>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <FooterMain />
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default MOUPage;
