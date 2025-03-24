"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import { motion } from "framer-motion";
import { eventsData } from "@/utils/helpers";
import Image from "next/image";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import EVerifyBtn from "@/components/EVerifyBtn";
import FooterMain from "@/sections/FooterMain";

const EventsPage = () => {
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
    <main id="Technotran Events">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section id="Events Landing Img" className={styles.eventsMainContainer}>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Events
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`At Technotran, we believe in the power of hands-on learning and
              collaboration. Through our workshops, training programs, and
              interactive sessions, we aim to bridge the gap between theoretical
              knowledge and practical application.`}
            </motion.h3>
          </div>
        </section>
        <section id="Events Content Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Events Successfully Executed
            </motion.h2>
            <div className={styles.cardsMainContainer}>
              {eventsData.map((item, index) => (
                <div key={index} className={styles.cardContainer}>
                  <Image
                    src={item.imgSrc}
                    alt={`Event Img - ${item.id}`}
                    height={600}
                    width={800}
                    priority
                    className={styles.cardImg}
                  />
                  <div className={styles.cardContent}>
                    <motion.h2
                      initial="hidden"
                      whileInView="visible"
                      variants={headingVariants}
                      viewport={{ once: false, amount: 0.2 }}
                      className={`${styles.cardTitle} josefin-sans-text`}
                    >
                      {item.title}
                    </motion.h2>
                    <p className={`${styles.cardDate} quicksand-text`}>
                      {item.dates}
                    </p>
                    <p className={`${styles.cardLocation} quicksand-text`}>
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

export default EventsPage;
