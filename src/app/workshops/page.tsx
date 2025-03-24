"use client";

import React from "react";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import NewNavBar from "@/sections/NewNavBar";
import Testimonials from "@/sections/Testimonials";
import styles from "./page.module.css";
import FooterMain from "@/sections/FooterMain";
import { workshopsData } from "./utils/helpers";
import EnquiryForm from "@/components/Enquiry";
import EVerifyBtn from "@/components/EVerifyBtn";

const WorkshopsPage = () => {
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
    <main id="Workshops Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Workshops Landing Img"
          className={styles.workshopsMainContainer}
        >
          <Image
            src="/images/Workshop-banner-img.png"
            alt="Workshops Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.workshopsLandingImg}
          />
        </section>
        <section id="Workshops Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Our Exclusive Engineering Workshops
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              An important mission of this organization is to galvanize high
              impact Hands -On workshops for Engineering students to bridge the
              gap between the academics and the real time industry requirements.
              We specialize in providing 20 + workshops in the area of Embedded
              systems, PCB Design, Robotics, IOT & Artificial Intelligence. We
              believe that our workshops would greatly benefit the students by
              providing them with valuable skills and knowledge. Our workshops
              are designed to be highly interactive and hands-on, allowing
              students to apply what they learn in a practical way. We have a
              team of experienced facilitators who are passionate about sharing
              their expertise and creating engaging learning experiences.
            </motion.h3>
          </div>
        </section>
        <section
          id="Workshops Content Section"
          className={styles.contentSection}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.3 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Hands on workshops we offer
          </motion.h2>
          <div className={styles.imageContainer}>
            {workshopsData.map((item, index) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.1 }}
                className={styles.imageCard}
              >
                <Image
                  src={item.imgSrc}
                  alt={`workshop img${index}`}
                  width={400}
                  height={400}
                  priority
                />
                <a
                  href="#Workshops-Enquiry"
                  className={`${styles.knowMoreBtn} quicksand-text`}
                >
                  Enquire
                </a>
              </motion.div>
            ))}
          </div>
        </section>
        <Testimonials />
        <section
          id="Workshops Enquiry Section"
          className={styles.enquiryContainer}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.4 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Workshops Enquiry
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

export default WorkshopsPage;
