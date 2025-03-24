"use client";

import NewNavBar from "@/sections/NewNavBar";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import EnquiryForm from "@/components/Enquiry";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FotterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const ArVrLabPage = () => {
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
    <main id="Technotran AR/VR Lab">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="School Robotics Lab Landing Img"
          className={styles.arVrLabMainContainer}
        >
          <Image
            src="/images/AR-and-VR-Lab.png"
            alt="School Robotics Lab Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.arVrLabLandingImg}
          />
        </section>
        <section id="AR/VR Lab Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              AR/VR LAB
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
                {`Dive into the next dimension with Technotran's specialized AR & VR
              Lab Solutions. As the digital landscape evolves, augmented and
              virtual reality are reshaping how we interact, learn, and
              innovate. Our meticulously designed lab setups are more than just
              spaces; they are gateways to new realities, crafted to catalyze
              creativity and pioneer breakthroughs in the immersive tech domain.`}
              </motion.h3>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/ar-vr-img-1.png?raw=true"
                }
                alt={"AR/VR Lab Img 1"}
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
              What is AR & VR?
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
                {`Augmented Reality (AR) and Virtual Reality (VR) are immersive
              technologies that reshape our perception of the world. AR enhances
              our environment by overlaying digital information onto the real
              world, while VR transports users to entirely virtual spaces,
              offering a fully immersive experience. These technologies are
              revolutionizing industries, from entertainment and gaming to
              education and healthcare, by providing interactive and realistic
              simulations. As tools of innovation, AR and VR continue to create
              new opportunities for learning, exploration, and engagement."`}
              </motion.h3>
              <Image
                src={
                  "https://github.com/CVSCharan/Technotran_Assets/blob/main/ar-vr-img-2.jpg?raw=true"
                }
                alt={"AR/VR Lab Img 1"}
                height={400}
                width={600}
                priority
                className={styles.imgOne}
              />
            </div>
          </div>
        </section>
        <section
          id="AR/VR Lab Content Section"
          className={styles.contentSection}
        >
          <div className={styles.arVrContainer}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.3 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              What we Offer
            </motion.h2>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Turnkey AR/VR Lab Setups
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  From hardware procurement to software integration, we provide
                  end-to-end solutions to establish your AR & VR lab, ensuring a
                  seamless and hassle-free setup process.
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  Customized Lab Design
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Every space is unique. Our team collaborates with you to
                  design a lab layout tailored to your specific needs and
                  spatial constraints.
                </h3>
              </div>
            </div>
            <Image
              src={
                "https://github.com/CVSCharan/Technotran_Assets/blob/main/ar-vr-img-3.jpg?raw=true"
              }
              alt={"AR/VR Lab Img 2"}
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
                  Immersive Experience Zones
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Dedicated zones equipped with the latest AR & VR gear,
                  allowing users to dive deep into virtual worlds or augment
                  their real-world surroundings.
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} josefin-sans-text`}
                >
                  AR/VR Development Workstations
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  High-performance computing solutions optimized for AR & VR
                  content creation, ensuring smooth development and testing
                  experiences.
                </h3>
              </div>
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
              Why choose Technotran for your AR/VR LAB setup
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Cutting-Edge Technology: </strong>Access to the latest AR
              & VR equipment and software, ensuring you’re always ahead of the
              curve.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Skill Development: </strong>Hands-on training modules and
              workshops to enhance technical skills in AR & VR development.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Research & Innovation: </strong>A conducive environment
              for academic and corporate research, driving innovation in AR & VR
              applications.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Skill Development: </strong>Hands-on training modules and
              workshops to enhance technical skills in AR & VR development.
            </motion.h3>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              <strong>Industry Connections: </strong>Regular interactions with
              industry experts, offering insights, mentorship, and potential
              collaboration opportunities.
            </motion.h3>
          </div>
        </section>
        <section
          id="AR/VR Lab Enquiry Section"
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
      <FotterMain />
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default ArVrLabPage;
