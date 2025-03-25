"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NewNavBar from "@/sections/NewNavBar";
import styles from "./page.module.css";
import { industrialSolutionsData } from "@/utils/helpers";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import FooterMain from "@/sections/FooterMain";
import EnquiryForm from "@/components/Enquiry";
import EVerifyBtn from "@/components/EVerifyBtn";

const IndustrialSolutionsPage = () => {
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
    <main id="Industrial Solutions Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Industrial Solutions Landing Img"
          className={styles.designServicesMainContainer}
        >
          <Image
            src="/images/design-services-banner-img.png"
            alt="Industrial Solutions Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.designServicesLandingImg}
          />
        </section>
        <section id="Industrial Solutions Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Industrial Solutions
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {` At Technotran, we pride ourselves on our Quality design services,
            powered by our state-of-the-art manufacturing unit equipped with
            advanced machinery. Our dedicated facility includes CNC machines,
            laser cutting machines, and 3D printers, enabling us to offer a wide
            range of design solutions tailored to meet your specific needs.`}
            </motion.h3>
          </div>
          <div className={styles.sectionTwo}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ color: "white" }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Electronic Innovation & Development
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              style={{ color: "white" }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {` We specialize in electronic hardware design, prototyping, and
            development services customized to our clients' needs. Whether
            you're an expert with detailed specifications or a non-technical
            customer, we have the expertise to translate your requirements into
            functional designs. Our services cover the entire spectrum of
            electronic hardware design, bringing your ideas to life efficiently.`}
            </motion.h3>
          </div>
          <div className={styles.sectionThree}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.4 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Embedded System Offerings
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.list}
            >
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Complete end to end Concept to Prototype of Products (including
                HW Design, Embedded Software Development, Board Designing and
                PCB).
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Robotics and Mechatronics.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Firmware and Device Drivers.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Home Automation.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Embedded System Integration.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                IoT (Internet of Things Platform Development).
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Outsourced Product Development (OPD).
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Technical documentation and user manual authoring.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Embedded Product Training.
              </li>
            </motion.ul>
          </div>
        </section>
        <section
          id="Industrial Solutions Content Section"
          className={styles.contentMainContainer}
        >
          {industrialSolutionsData.map((item, index) => (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? styles.contentMainContainerOdd
                  : styles.contentMainContainerEven
              }
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: false, amount: 0.4 }}
                className={styles.contentSubContainer}
              >
                <h2
                  style={{ color: index % 2 !== 0 ? "" : "white" }}
                  className="josefin-sans-text"
                >
                  {item.title}
                </h2>
                <h3
                  style={{ color: index % 2 !== 0 ? "" : "white" }}
                  className="quicksand-text"
                >
                  {item.desc}
                </h3>
              </motion.div>
              <Image
                src={item.imgSrc}
                alt={`industrial solutions content img${index}`}
                height={400}
                width={400}
                className={styles.contentImg}
                priority
              />
            </div>
          ))}
        </section>
        <section id="Design Services Enquiry Section">
          <div className={styles.enquiryContainer}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.4 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Industrial Solutions Enquiry
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

export default IndustrialSolutionsPage;
