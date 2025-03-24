"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/WhyChooseUs.module.css";
import { whyChooseUsData } from "@/utils/helpers";

const WhyChooseUs = () => {
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
    <motion.section
      id="Why Choose Technotran?"
      className={styles.whyChooseUsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }} // Ensures section animation triggers on focus
    >
      <motion.h2
        variants={headingVariants}
        className={`${styles.whyChooseUsTitle} josefin-sans-text`}
      >
        Why Technotran Solutions?
      </motion.h2>

      <div className={styles.cardMainContainer}>
        {whyChooseUsData.map((item, index) => (
          <motion.div
            key={item.id}
            className={styles.cardContainer}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6 }} // Triggers each card animation in the viewport
          >
            <Image
              priority
              src={item.imgSrc}
              alt={`why-choose-us-img${index}`}
              height={300}
              width={400}
              className={styles.cardImg}
            />
            <div className={styles.cardSubContainer}>
              <p className={`${styles.cardTxt} quicksand-text`}>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
