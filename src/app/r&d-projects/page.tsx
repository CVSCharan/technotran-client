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
        <section id="R&D Content Section" className={styles.projectsSection}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.subTitle} josefin-sans-text`}>
                Explore Our Projects
              </h2>
            </motion.div>

            <div className={styles.projectsGrid}>
              <motion.div
                className={styles.projectCard}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
              >
                <div className={styles.projectMedia}>
                  <iframe
                    src="https://www.youtube.com/embed/cVvQZR75u7k?autoplay=0&mute=1&loop=1&controls=1&playlist=cVvQZR75u7k"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className={styles.videoPlayer}
                    title="Electronic Protection Locker System"
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={`${styles.projectTitle} josefin-sans-text`}>
                    Electronic Protection Locker System
                  </h3>
                  <p className={`${styles.projectDescription} quicksand-text`}>
                    An advanced security solution featuring biometric
                    authentication and remote monitoring capabilities for
                    enhanced protection of valuable assets.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.projectCard}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.projectMedia}>
                  <video
                    src="/videos/Soil-Investigation-Robot.mp4"
                    muted
                    controls
                    className={styles.videoPlayer}
                    poster="/images/soil-robot-thumbnail.jpg"
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={`${styles.projectTitle} josefin-sans-text`}>
                    Soil Investigation Robot
                  </h3>
                  <p className={`${styles.projectDescription} quicksand-text`}>
                    An autonomous robot designed to analyze soil composition and
                    properties in real-time, providing valuable data for
                    agricultural and environmental applications.
                  </p>
                </div>
              </motion.div>

              {/* Uncomment when ready to add this project
              <motion.div 
                className={styles.projectCard}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.projectMedia}>
                  <video
                    src="/videos/Intelligent-Waste-Disposal-Robot.mp4"
                    muted
                    controls
                    className={styles.videoPlayer}
                    poster="/images/waste-robot-thumbnail.jpg"
                  />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={`${styles.projectTitle} josefin-sans-text`}>
                    River Cleaning Robot
                  </h3>
                  <p className={`${styles.projectDescription} quicksand-text`}>
                    An innovative solution for waterway maintenance, capable of autonomously collecting and sorting waste from rivers and lakes.
                  </p>
                </div>
              </motion.div>
              */}
            </div>

            <motion.div
              className={styles.ctaContainer}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className={`${styles.ctaText} josefin-sans-text`}>
                Interested in collaborating on a research project?
              </h3>
              <motion.a
                href="/contact-us"
                className={`${styles.ctaButton} quicksand-text`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our R&D Team
              </motion.a>
            </motion.div>
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
