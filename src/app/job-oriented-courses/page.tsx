"use client";

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import NewNavBar from "@/sections/NewNavBar";
import { motion } from "framer-motion";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import FooterMain from "@/sections/FooterMain";
import { jobOrientedCoursesData } from "@/utils/helpers";
import EnquiryForm from "@/components/Enquiry";
import EVerifyBtn from "@/components/EVerifyBtn";

const JobOrientedCourcesPage = () => {
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
    <main id="Job Oriented Courses Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Job Oriented Landing Img"
          className={styles.jobOrientedCoursesMainContainer}
        >
          <Image
            src="/images/Job-oriented-courses-banner-img.png"
            alt="Job Oriented Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.jobOrientedCoursesLandingImg}
          />
        </section>
        <section id="Job Oriented Courses Landing Section">
          <div className={styles.sectionOne}>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              {`Technotran offers industry-leading job-oriented courses designed to equip you with the skills and knowledge needed to thrive in today's competitive job market. Our comprehensive programs provide hands-on experience and practical insights, ensuring you are prepared for a successful career in technology. Additionally, Technotran provides placement assistance to help you secure rewarding job opportunities in your chosen field. With our support, you can confidently embark on your career journey and achieve your professional goals.`}
            </motion.h3>
          </div>
        </section>
        <section
          id="Job Oriented Content Section"
          className={styles.contentSection}
        >
          <div className={styles.container}>
            {jobOrientedCoursesData.map((item, index) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.3 }}
                key={item.id}
                className={index % 2 === 0 ? styles.cardEven : styles.cardOdd}
              >
                <Image
                  src={item.imgSrc}
                  alt={`Job Oriented Courses img${index}`}
                  height={300}
                  width={300}
                  priority
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h2
                    style={{ color: index % 2 === 0 ? "white" : "" }}
                    className={`${styles.cardTitle} josefin-sans-text`}
                  >
                    {item.title}
                  </h2>
                  <h3
                    style={{ color: index % 2 === 0 ? "white" : "" }}
                    className={`${styles.cardDesc} quicksand-text`}
                  >
                    {item.desc}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section
          id="Job Oriented Courses Enquiry Section"
          className={styles.enquiryContainer}
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.4 }}
            className={`${styles.subTitle} josefin-sans-text`}
          >
            Register Now
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

export default JobOrientedCourcesPage;
