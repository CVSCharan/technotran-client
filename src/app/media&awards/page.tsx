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
        <section
          id="Awards Landing"
          className={styles.rndProjectsMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Awards
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`Technotran has been recognized for its excellence in providing
              innovative training programs, workshops, and project solutions.
              Our awards reflect our dedication to empowering students and
              professionals with industry-relevant skills and knowledge.`}
            </motion.h3>
            <Image
              src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Awards1.jpeg?raw=true"
              alt="Awards Landing Img"
              height={700}
              width={1000}
              priority
              className={styles.mnaLandingImg}
            />
          </div>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Trailblazer Award in STEM Education
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`We are proud to announce a significant achievement for
              Technotran—receiving the prestigious "Trailblazer in STEM
              Education, Educational Technology & Industry Integration" award at
              the Growth Stories Summit & Awards, hosted by TheCconnects
              magazine. This recognition celebrates our dedication to
              innovation, excellence, and the seamless integration of
              educational technology with industry practices. Technotran's
              commitment to advancing STEM education and empowering students
              with future-ready skills has been acknowledged as a key driver in
              shaping the future of both education and industry collaboration.`}
            </motion.h3>
            <Image
              src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Awards2.jpeg?raw=true"
              alt="Awards Landing Img"
              height={1000}
              width={500}
              priority
              className={styles.awardsLandingImg}
            />
          </div>
        </section>
        <section
          id="Awards Landing"
          className={styles.rndProjectsMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Media
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`Technotran’s journey has garnered significant attention across
              multiple media platforms, showcasing our impactful initiatives,
              strategic collaborations, and remarkable achievements. Our efforts
              in bridging the gap between education and technology have
              resonated with industry leaders, educators, and the wider academic
              community. We are proud to be recognized for our contributions to
              technology education and remain committed to making a lasting
              impact. Stay connected with us as we continue to shape the future
              of education and innovation in technology.`}
            </motion.h3>
            <Image
              src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Media1.png?raw=true"
              alt="Awards Landing Img"
              height={1000}
              width={1000}
              priority
              className={styles.mediaLandingImg}
            />
          </div>
        </section>
        <section
          id="Awards Landing"
          className={styles.rndProjectsMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Social Media Highlights
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
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
        <section>
          <div className={styles.sectionOne}>
            <iframe
              src="https://www.youtube.com/embed/MDec483Hp5E?autoplay=0&mute=1&loop=1&playlist=MDec483Hp5E&mute=0&controls=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className={styles.videoPlayer}
            />
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
