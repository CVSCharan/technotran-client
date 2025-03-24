"use client";

import NewNavBar from "@/sections/NewNavBar";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";

const ContactUsPage = () => {
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
    <main id="Contact Us Page">
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Contact Us Landing Img"
          className={styles.contactUsMainContainer}
        >
          <Image
            src="/images/Contact-us-banner-image.png"
            alt="Contact Us Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.contactUsLandingImg}
          />
        </section>
        <section id="Contact Us Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              {`We're here to assist you and answer any questions you may have. Feel
            free to reach out to us.`}
            </motion.h2>
            <Image
              alt="Contact Us Banner Img"
              src="/images/contact-us-banner-img.jpg"
              height={500}
              width={500}
              priority
              className={styles.bannerImage}
            />
          </div>
        </section>
        <section
          id="Contact Us Content Section"
          className={styles.contactSection}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            className={styles.contactContainer}
          >
            <Image
              src="/images/Technotran-logo.png"
              alt="Contact Us Logo"
              height={200}
              width={200}
              priority
              className={styles.logoImage}
            />
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <h2>Address</h2>
                <p>Technotran office, Near more supermarket,</p>
                <p>beside Canara bank, Magunta layout, Nellore.</p>
              </div>
              <div className={styles.contactItem}>
                <h2>Email</h2>
                <div className={styles.contactInfo}>
                  <EmailIcon className={styles.icon} />
                  <p>info@technotran.in</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <h2>Contact Number</h2>
                <div className={styles.contactInfo}>
                  <PhoneIcon className={styles.icon} />
                  <p>+91 9000 326 936</p>
                </div>
                <div className={styles.contactInfo}>
                  <PhoneIcon className={styles.icon} />
                  <p>+91 9100 103 806</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <FooterMain />
      <EVerifyBtn />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default ContactUsPage;
