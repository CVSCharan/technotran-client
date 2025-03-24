"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import { motion } from "framer-motion";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const RnDProjectsPage = () => {
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
    <main id="Technotran R&D Projets">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section id="R&D Landing" className={styles.rndProjectsMainContainer}>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              R & D Projects
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`At Technotran, we specialize in R&D projects across a wide range
              of domains, including embedded systems, PCB design, 3D printing,
              robotics, and IoT. Our dedicated team works on innovative
              solutions to drive advancements in technology, providing
              customized research and development services to meet the unique
              needs of industries such as education, manufacturing, and
              automation. We focus on delivering high-quality prototypes,
              optimizing performance, and ensuring that our solutions are both
              scalable and sustainable.`}
            </motion.h3>
          </div>
        </section>
        <section id="R&D Content Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
              style={{ marginBottom: "3rem" }}
            >
              Explore Our Projects Videos
            </motion.h2>
            <iframe
              src="https://www.youtube.com/embed/cVvQZR75u7k?autoplay=1&loop=1&mute=0controls=1&playlist=cVvQZR75u7k"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={styles.videoPlayer}
            />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ marginBottom: "4rem" }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Electronic Protection Locker system
            </motion.h2>
            {/* <video
              src="/videos/Intelligent-Waste-Disposal-Robot.mp4"
              muted
              controls
              className={styles.videoPlayer}
            />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ marginBottom: "4rem" }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              River Cleaning Robot
            </motion.h2> */}
            <video
              src="/videos/Soil-Investigation-Robot.mp4"
              muted
              controls
              className={styles.videoPlayer}
            />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ marginBottom: "4rem" }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Soil Investigation Robot
            </motion.h2>
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

export default RnDProjectsPage;
