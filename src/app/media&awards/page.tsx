"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import EVerifyBtn from "@/components/EVerifyBtn";
import FooterMain from "@/sections/FooterMain";
import SocialMediaEmbed from "@/components/SocialMediaPosts";

const MediaAndAwards = () => {
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
    <main id="Technotran Media & Awards">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section id="Awards" className={styles.awardsSection}>
          <div className={styles.heroContainer}>
            <Image
              src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Awards1.jpeg?raw=true"
              alt="Awards Banner"
              height={700}
              width={1000}
              priority
              className={styles.heroBanner}
            />
            <div className={styles.heroOverlay}></div>
          </div>

          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.sectionTitle} josefin-sans-text`}>
                Awards & Recognition
              </h2>
            </motion.div>

            <motion.div
              className={styles.sectionContent}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className={`${styles.sectionDescription} quicksand-text`}>
                Technotran has been recognized for its excellence in providing
                innovative training programs, workshops, and project solutions.
                Our awards reflect our dedication to empowering students and
                professionals with industry-relevant skills and knowledge.
              </p>
            </motion.div>
          </div>

          <div className={styles.awardCard}>
            <div className={styles.awardContent}>
              <motion.div
                className={styles.awardHeader}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3 className={`${styles.awardTitle} josefin-sans-text`}>
                  Trailblazer Award in STEM Education
                </h3>
                <div className={styles.awardUnderline}></div>
              </motion.div>

              <motion.div
                className={styles.awardDetails}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
              >
                <p className={`${styles.awardDescription} quicksand-text`}>
                  {`We are proud to announce a significant achievement for
                  Technotran—receiving the prestigious "Trailblazer in STEM
                  Education, Educational Technology & Industry Integration"
                  award at the Growth Stories Summit & Awards, hosted by
                  TheCconnects magazine.`}
                </p>
                <p className={`${styles.awardDescription} quicksand-text`}>
                  {`This recognition celebrates our dedication to innovation,
                  excellence, and the seamless integration of educational
                  technology with industry practices. Technotran's commitment to
                  advancing STEM education and empowering students with
                  future-ready skills has been acknowledged as a key driver in
                  shaping the future of both education and industry
                  collaboration.`}
                </p>
              </motion.div>
            </div>

            <motion.div
              className={styles.awardImageWrapper}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Awards2.jpeg?raw=true"
                alt="Trailblazer Award"
                height={1000}
                width={500}
                priority
                className={styles.awardImage}
              />
            </motion.div>
          </div>
        </section>
        <section id="Media Section" className={styles.mediaSection}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.sectionTitle} josefin-sans-text`}>
                Media Coverage
              </h2>
            </motion.div>

            <div className={styles.mediaContentContainer}>
              <motion.div
                className={styles.mediaImageWrapper}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3 }}
              >
                <Image
                  src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media1.png?raw=true"
                  alt="Technotran Media Coverage"
                  height={1000}
                  width={1000}
                  priority
                  className={styles.mediaImage}
                />
              </motion.div>
              <motion.div
                className={styles.mediaTextContent}
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
              >
                <p className={`${styles.mediaDescription} quicksand-text`}>
                  {` Technotran's journey has garnered significant attention across
                  multiple media platforms, showcasing our impactful
                  initiatives, strategic collaborations, and remarkable
                  achievements.`}
                </p>
                <p className={`${styles.mediaDescription} quicksand-text`}>
                  Our efforts in bridging the gap between education and
                  technology have resonated with industry leaders, educators,
                  and the wider academic community. We are proud to be
                  recognized for our contributions to technology education and
                  remain committed to making a lasting impact.
                </p>
                <p className={`${styles.mediaDescription} quicksand-text`}>
                  Stay connected with us as we continue to shape the future of
                  education and innovation in technology.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="Awards Landing"
          className={styles.rndProjectsMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.sectionTitle} josefin-sans-text`}>
                Social Media Highlights
              </h2>
            </motion.div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionDescription} quicksand-text`}
            >
              {` Explore our media features below to learn more about our journey
              and the positive changes we are driving in the world of STEM
              education.`}
            </motion.h3>

            <div className={styles.imgsContainer}>
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media2.jpg?raw=true"
                alt="Awards Img"
                height={500}
                width={500}
                priority
                className={styles.mediaImg}
              />
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media3.jpg?raw=true"
                alt="Awards Img"
                height={500}
                width={500}
                priority
                className={styles.mediaImg}
              />
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media5.jpeg?raw=true"
                alt="Awards Img"
                height={500}
                width={500}
                priority
                className={styles.mediaImg}
              />
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media4.jpeg?raw=true"
                alt="Awards Img"
                height={500}
                width={500}
                priority
                className={styles.mediaImg}
              />
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media6.jpeg?raw=true"
                alt="Awards Img"
                height={700}
                width={700}
                priority
                className={styles.mediaImgOne}
              />
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media7.jpeg?raw=true"
                alt="Awards Img"
                height={500}
                width={500}
                priority
                className={styles.mediaImg}
              />
            </div>

            <div className={styles.socialMediaContainer}>
              <SocialMediaEmbed />
            </div>
          </div>
        </section>
        <section id="Video Showcase" className={styles.videoSection}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.sectionTitle} josefin-sans-text`}>
                Inauguration Of Technotran Electronics Solutions
              </h2>
            </motion.div>

            <motion.div
              className={styles.videoWrapper}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <iframe
                src="https://www.youtube.com/embed/MDec483Hp5E?autoplay=0&mute=1&loop=1&playlist=MDec483Hp5E&mute=0&controls=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Technotran Video Showcase"
                className={styles.videoPlayer}
              />
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

export default MediaAndAwards;
