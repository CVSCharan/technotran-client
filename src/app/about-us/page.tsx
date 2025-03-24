"use client";

import NewNavBar from "@/sections/NewNavBar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { mouData } from "@/utils/helpers";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const AboutUsPage = () => {
  const [currentBannerOneImage, setCurrentBannerOneImage] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerOneImage((prev) => (prev + 1) % mouData.length); // Infinite loop for Banner One
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [mouData]);

  return (
    <main id="About Us Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="About US Landing Img"
          className={styles.aboutUsMainContainer}
        >
          <Image
            src="/images/about-us-banner-image.png"
            alt="About Us Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.aboutUsLandingImg}
          />
        </section>
        <section id="About Us Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              About Us
            </motion.h2>
            <div className={styles.textContainer}>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                className={`${styles.sectionTxt} quicksand-text`}
                style={{
                  padding: "0 0.5rem",
                  maxWidth: "50%",
                  fontSize: "0.9rem",
                }}
              >
                {`Technotran Solutions (ISO 9001:2015 Certified Company) is a
              pioneering Educational Technology and Innovation Company
              specializing in Embedded Systems, Robotics, 3D Printing, IoT, and
              Artificial Intelligence. Serving schools, colleges, and
              universities nationwide, we are dedicated to bridging the gap
              between academics and industry through innovative solutions. Our
              services encompass hands-on training programs, internship
              certifications, and industrial workshops, alongside custom DIY
              robotic kit design, electronic product development, PCB design,
              prototyping, and manufacturing. With a strong focus on R&D and
              societal impact, we collaborate with institutions to create
              cutting-edge labs, support real-world projects, and deliver
              sustainable technology solutions in agriculture, healthcare, and
              education. At Technotran, we empower individuals and institutions
              to thrive in the ever-evolving world of technology.`}
              </motion.h3>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/About-us.png?raw=true"
                }
                alt={"About Us Img 1"}
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
        </section>
        <section id="Technotran About Us Content">
          <div className={styles.sectionOne}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Mission
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  {`To empower individuals and institutions by delivering
                  innovative educational solutions, cutting-edge technologies,
                  and real-world training experiences. We aim to bridge the gap
                  between academia and industry by fostering a culture of
                  creativity, innovation, and lifelong learning, driving
                  technological advancements for a better future.`}
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Vision
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  {`To be a global leader in educational technology and
                  innovation, shaping the future of learning and industry
                  through transformative solutions in robotics, AI, IoT, and
                  embedded systems. We envision a world where technology and
                  education work hand-in-hand to solve societal challenges and
                  enable sustainable development across all sectors.`}
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="About Us Content Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Technotran Triumphs
            </motion.h2>
            <div className={styles.textContainer}>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.list}
              >
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 ISO Certified: An ISO 9001:2015 Certified Company committed
                  to excellence in education and innovation.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 AICTE Approved: Technotran is recognized by AICTE for
                  offering internship programs for UG students.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 Workshops Expertise: Successfully conducted 150+ workshops
                  on cutting-edge technologies.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 Extensive Training: Trained over 20,000 students across 50+
                  colleges in India.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 Research Excellence: Currently engaged in two ongoing
                  research projects.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 Industry Recognition: Officially recognized as an Industry
                  by the Ministry of MSME, Government of India.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  🔹 Robotic Innovations: Began manufacturing our customized
                  robotic kits in 2023, ensuring quality and innovation.
                </li>
              </motion.ul>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/about-Technotran.png?raw=true"
                }
                alt={"About Us Img 2"}
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              What Sets Us Apart
            </motion.h2>
            <div className={styles.cardContainer}>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Manufacturing Excellence
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  At Technotran, we don’t just distribute; we create. Our
                  in-house manufacturing ensures that every product meets the
                  highest standards of quality and performance.
                </h3>
              </div>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Innovative Solutions
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Our team is constantly at the forefront of technological
                  advancements, ensuring our kits and products are always
                  up-to-date and relevant.
                </h3>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Educational Focus
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Understand the importance of hands-on learning. Our kits are
                  designed to offer both foundational knowledge and the
                  opportunity for creative exploration.
                </h3>
              </div>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Dedicated Support
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Our commitment to our customers goes beyond the sale. We offer
                  dedicated support, ensuring you make the most of your
                  Technotran experience.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="Techtron About Us Hero Section">
          <div className={styles.container}>
            <div className={styles.innerContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src="https://github.com/CVSCharan/Technotran_Assets/blob/main/R.Vikas-Reddy-hero-img.jpg?raw=true"
                  alt="R. Vikas Reddy - Technotran Director"
                  height={400}
                  width={600}
                  priority
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.textWrapper}>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: false, amount: 0.2 }}
                  className={styles.name}
                >
                  R. Vikas Reddy
                </motion.h2>
                <h3 className={styles.role}>Director</h3>
                <p className={styles.description}>
                  As the founder and managing director of TECHNOTRAN, R. Vikas
                  Reddy brings over a decade of expertise in robotics and
                  embedded systems. With a strong background in electronics
                  circuit design, PCB design, and embedded C programming, he
                  specializes in various microcontrollers and communication
                  protocols. His achievements include conducting numerous
                  workshops, training thousands of students, establishing
                  robotics labs in schools, and collaborating with prestigious
                  engineering colleges. Currently, he is overseeing two research
                  projects aimed at further advancing technology education and
                  innovation.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.innerContainerOne}>
              <div className={styles.imageWrapper}>
                <Image
                  src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Yashika.K-hero-img.jpeg?raw=true"
                  alt="Yashika K - Technotran Operations Head"
                  height={400}
                  width={600}
                  priority
                  className={styles.heroImage}
                />
              </div>
              <div className={styles.textWrapper}>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  variants={headingVariants}
                  viewport={{ once: false, amount: 0.2 }}
                  className={styles.name}
                >
                  Yashika K
                </motion.h2>
                <h3 className={styles.role}>Operations Head</h3>
                <p className={styles.description}>
                  As the Operations Head at TECHNOTRAN, she brings a wealth of
                  experience and expertise to ensure seamless operations and
                  effective coordination within the company. With her strategic
                  planning skills, she oversees logistics and streamlines
                  processes, contributing to TECHNOTRAN’s ongoing success in the
                  industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="About Us MOU Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              MOU With Various Institutions
            </motion.h2>
            <div className={styles.bannerContainer}>
              {/* Banner One - Slide Left on Change */}
              <div className={styles.imageWrapperOne}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentBannerOneImage} // Ensure re-render when image changes
                    src={mouData[currentBannerOneImage]?.imgSrc}
                    alt="DSN Events Intro Banner 1"
                    className={styles.bannerOne}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                </AnimatePresence>
              </div>
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

export default AboutUsPage;
