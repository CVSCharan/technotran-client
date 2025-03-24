"use client";

import NewNavBar from "@/sections/NewNavBar";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { schoolRoboticsLabImgsData } from "@/utils/helpers";
import EnquiryForm from "@/components/Enquiry";
import FooterMain from "@/sections/FooterMain";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import EVerifyBtn from "@/components/EVerifyBtn";

const SchoolRoboticsLabPage = () => {
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
    <main id="Technotran School Robotics Lab">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="School Robotics Lab Landing Img"
          className={styles.schoolRoboticsLabMainContainer}
        >
          <Image
            src="/images/school-robotics-lab-banner.png"
            alt="School Robotics Lab Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.schoolRoboticsLabLandingImg}
          />
        </section>
        <section id="School Robotics Lab Landing Section">
          <div
            className={styles.sectionOne}
            style={{ flexDirection: "column" }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              School Robotics LAB
            </motion.h2>
            <div className={styles.textContainer}>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: true, amount: 0.2 }}
                className={`${styles.sectionTxt} quicksand-text`}
                style={{ padding: "0 1rem", maxWidth: "50%" }}
              >
                Technotran specializes in providing comprehensive robotics lab
                setup services for schools, ensuring that institutions can offer
                cutting-edge robotics education to their students. Our services
                encompass the complete establishment of robotics labs, including
                the provision of custom-designed robotics kits, training for
                students, and ongoing support to ensure a seamless learning
                experience.
              </motion.h3>
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/school-robotics-lab-img1.png?raw=true"
                alt="School Robotics Img 1"
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
        </section>
        <section
          id="School Robotics Lab Content Section"
          className={styles.contentSection}
        >
          <div className={styles.srlContainer}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.3 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              {`What Sets Technotran's Robotics Lab Apart?`}
            </motion.h2>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  State-of-the-Art Infrastructure
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  {`We don’t just provide equipment; we transform spaces. Our labs
                  are designed to be both functional and inspiring, equipped
                  with the latest robotics gear.`}
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Curated Learning Paths
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Our curriculum is crafted to cater to diverse learning needs,
                  ensuring every student, from novice to pro, finds their
                  rhythm.
                </h3>
              </div>
            </div>
            <Image
              src={
                "https://github.com/CVSCharan/Technotran_Assets/blob/main/School-Robotics-Lab.png?raw=true"
              }
              alt={"School Robotics Lab Img 2"}
              height={400}
              width={600}
              priority
              className={styles.imgThree}
            />
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Beyond the Classroom
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  With Technotran, learning doesn’t stop at the bell. We
                  organize regular workshops, competitions, and events to keep
                  the flame of innovation burning.
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Guidance from the Best
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Technotran’s team comprises robotics professionals and
                  educators who bring a wealth of knowledge and experience to
                  the table.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section
          id="School Robotics Lab Content Imgs Section"
          className={styles.contentSection}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Skill set cultivated in the Robotics lab
          </motion.h2>
          <div className={styles.srlImagesContainer}>
            {schoolRoboticsLabImgsData.map((item, index) => (
              <div key={index} className={styles.imgCard}>
                <Image
                  src={item.imgSrc}
                  alt={`SRL img - ${item.id}`}
                  height={250}
                  width={250}
                  priority
                  className={styles.imgTwo}
                />
                <h2 className={`${styles.cardImgTitle} quicksand-text`}>
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </section>
        <section
          id="School Robotics Lab Enquiry Section"
          className={styles.enquiryContainer}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.4 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Enquiry Form
          </motion.h2>
          <EnquiryForm />
        </section>
      </div>
      <FooterMain />
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default SchoolRoboticsLabPage;
