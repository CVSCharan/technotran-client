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
        <section id="About Us Landing Section" className={styles.aboutUsSection}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className={`${styles.subTitle} josefin-sans-text`}>
              About Us
            </h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>
          
          <div className={styles.aboutUsContainer}>
            <motion.div 
              className={styles.aboutUsContent}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className={`${styles.aboutUsText} quicksand-text`}>
                Technotran Solutions (ISO 9001:2015 Certified Company) is a
                pioneering Educational Technology and Innovation Company
                specializing in Embedded Systems, Robotics, 3D Printing, IoT, and
                Artificial Intelligence. Serving schools, colleges, and
                universities nationwide, we are dedicated to bridging the gap
                between academics and industry through innovative solutions.
              </p>
              
              <p className={`${styles.aboutUsText} quicksand-text`}>
                Our services encompass hands-on training programs, internship
                certifications, and industrial workshops, alongside custom DIY
                robotic kit design, electronic product development, PCB design,
                prototyping, and manufacturing.
              </p>
              
              <p className={`${styles.aboutUsText} quicksand-text`}>
                With a strong focus on R&D and societal impact, we collaborate with
                institutions to create cutting-edge labs, support real-world projects,
                and deliver sustainable technology solutions in agriculture, healthcare,
                and education. At Technotran, we empower individuals and institutions
                to thrive in the ever-evolving world of technology.
              </p>
            </motion.div>
            
            <motion.div 
              className={styles.aboutUsImageWrapper}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/About-us.png?raw=true"
                alt="About Us Image"
                height={400}
                width={600}
                priority
                className={styles.aboutUsImage}
              />
            </motion.div>
          </div>
        </section>
        <section
          id="Technotran About Us Content"
          className={styles.missionVisionSection}
        >
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className={`${styles.subTitle} josefin-sans-text`}>
              Our Purpose
            </h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.mvContainer}>
            <motion.div
              className={styles.mvCard}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.mvIconWrapper}>
                <div className={styles.mvIcon}>
                  <Image
                    src="/images/icons/mission-icon.svg"
                    alt="Mission Icon"
                    width={48}
                    height={48}
                    priority
                    className={styles.classicIcon}
                  />
                </div>
              </div>
              <h2 className={`${styles.mvTitle} josefin-sans-text`}>Mission</h2>
              <p className={`${styles.mvDesc} quicksand-text`}>
                To empower individuals and institutions by delivering innovative
                educational solutions, cutting-edge technologies, and real-world
                training experiences. We aim to bridge the gap between academia
                and industry by fostering a culture of creativity, innovation,
                and lifelong learning, driving technological advancements for a
                better future.
              </p>
            </motion.div>

            <motion.div
              className={styles.mvCard}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.mvIconWrapper}>
                <div className={styles.mvIcon}>
                  <Image
                    src="/images/icons/vision-icon.svg"
                    alt="Vision Icon"
                    width={48}
                    height={48}
                    priority
                    className={styles.classicIcon}
                  />
                </div>
              </div>
              <h2 className={`${styles.mvTitle} josefin-sans-text`}>Vision</h2>
              <p className={`${styles.mvDesc} quicksand-text`}>
                To be a global leader in educational technology and innovation,
                shaping the future of learning and industry through
                transformative solutions in robotics, AI, IoT, and embedded
                systems. We envision a world where technology and education work
                hand-in-hand to solve societal challenges and enable sustainable
                development across all sectors.
              </p>
            </motion.div>
          </div>
        </section>
        <section id="About Us Content Section">
          <div className={styles.triumphsSection}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.subTitle} josefin-sans-text`}>
                Technotran Triumphs
              </h2>
              <div className={styles.titleUnderline}></div>
            </motion.div>
            <div className={styles.triumphsContainer}>
              <div className={styles.triumphsContent}>
                <div className={styles.triumphsGrid}>
                  {[
                    {
                      icon: "🏆",
                      title: "ISO Certified",
                      desc: "An ISO 9001:2015 Certified Company committed to excellence in education and innovation.",
                    },
                    {
                      icon: "🎓",
                      title: "AICTE Approved",
                      desc: "Technotran is recognized by AICTE for offering internship programs for UG students.",
                    },
                    {
                      icon: "📚",
                      title: "Workshops Expertise",
                      desc: "Successfully conducted 150+ workshops on cutting-edge technologies.",
                    },
                    {
                      icon: "👨‍🎓",
                      title: "Extensive Training",
                      desc: "Trained over 20,000 students across 50+ colleges in India.",
                    },
                    {
                      icon: "🔬",
                      title: "Research Excellence",
                      desc: "Currently engaged in two ongoing research projects.",
                    },
                    {
                      icon: "🏭",
                      title: "Industry Recognition",
                      desc: "Officially recognized as an Industry by the Ministry of MSME, Government of India.",
                    },
                    {
                      icon: "🤖",
                      title: "Robotic Innovations",
                      desc: "Began manufacturing our customized robotic kits in 2023, ensuring quality and innovation.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={styles.triumphItem}
                      initial="hidden"
                      whileInView="visible"
                      variants={cardVariants}
                      custom={index}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className={styles.triumphIcon}>{item.icon}</div>
                      <div className={styles.triumphText}>
                        <h3
                          className={`${styles.triumphTitle} josefin-sans-text`}
                        >
                          {item.title}
                        </h3>
                        <p className={`${styles.triumphDesc} quicksand-text`}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionOne}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h2 className={`${styles.subTitle} josefin-sans-text`}>
                What Sets Us Apart
              </h2>
              <div className={styles.titleUnderline}></div>
            </motion.div>

            <div className={styles.featuresGrid}>
              <motion.div
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={styles.featureIconWrapper}>
                  <div className={styles.featureIcon}>
                    <Image
                      src="/images/icons/manufacturing-classic.svg"
                      alt="Manufacturing Excellence Icon"
                      width={48}
                      height={48}
                      priority
                      className={styles.classicIcon}
                    />
                  </div>
                </div>
                <h2 className={`${styles.featureTitle} josefin-sans-text`}>
                  Manufacturing Excellence
                </h2>
                <p className={`${styles.featureDesc} quicksand-text`}>
                  At Technotran, we don't just distribute; we create. Our
                  in-house manufacturing ensures that every product meets the
                  highest standards of quality and performance.
                </p>
              </motion.div>

              <motion.div
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 }}
              >
                <div className={styles.featureIconWrapper}>
                  <div className={styles.featureIcon}>
                    <Image
                      src="/images/icons/innovation-classic.svg"
                      alt="Innovative Solutions Icon"
                      width={48}
                      height={48}
                      priority
                      className={styles.classicIcon}
                    />
                  </div>
                </div>
                <h2 className={`${styles.featureTitle} josefin-sans-text`}>
                  Innovative Solutions
                </h2>
                <p className={`${styles.featureDesc} quicksand-text`}>
                  Our team is constantly at the forefront of technological
                  advancements, ensuring our kits and products are always
                  up-to-date and relevant.
                </p>
              </motion.div>

              <motion.div
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.featureIconWrapper}>
                  <div className={styles.featureIcon}>
                    <Image
                      src="/images/icons/education-classic.svg"
                      alt="Educational Focus Icon"
                      width={48}
                      height={48}
                      priority
                    />
                  </div>
                </div>
                <h2 className={`${styles.featureTitle} josefin-sans-text`}>
                  Educational Focus
                </h2>
                <p className={`${styles.featureDesc} quicksand-text`}>
                  Understand the importance of hands-on learning. Our kits are
                  designed to offer both foundational knowledge and the
                  opportunity for creative exploration.
                </p>
              </motion.div>

              <motion.div
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.featureIconWrapper}>
                  <div className={styles.featureIcon}>
                    <Image
                      src="/images/icons/support-classic.svg"
                      alt="Dedicated Support Icon"
                      width={48}
                      height={48}
                      priority
                      className={styles.classicIcon}
                    />
                  </div>
                </div>
                <h2 className={`${styles.featureTitle} josefin-sans-text`}>
                  Dedicated Support
                </h2>
                <p className={`${styles.featureDesc} quicksand-text`}>
                  Our commitment to our customers goes beyond the sale. We offer
                  dedicated support, ensuring you make the most of your
                  Technotran experience.
                </p>
              </motion.div>
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
        <section id="About Us MOU Section" className={styles.mouSection}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className={`${styles.subTitle} josefin-sans-text`}>
              MOU With Various Institutions
            </h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>
          
          <div className={styles.mouContainer}>
            <motion.div 
              className={styles.mouCard}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBannerOneImage}
                  className={styles.mouContent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.mouImageWrapper}>
                    <Image
                      src={mouData[currentBannerOneImage]?.imgSrc}
                      alt={`MOU with ${mouData[currentBannerOneImage]?.name}`}
                      width={600}
                      height={400}
                      priority
                      className={styles.mouImage}
                    />
                  </div>
                  <h3 className={`${styles.mouInstitutionName} josefin-sans-text`}>
                    {mouData[currentBannerOneImage]?.name}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            <div className={styles.mouIndicators}>
              {mouData.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.mouIndicator} ${
                    index === currentBannerOneImage ? styles.mouIndicatorActive : ""
                  }`}
                  onClick={() => setCurrentBannerOneImage(index)}
                  aria-label={`View MOU with ${mouData[index]?.name}`}
                />
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

export default AboutUsPage;
