"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Divider } from "antd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Components and sections
import NewNavBar from "@/sections/NewNavBar";
import FooterMain from "@/sections/FooterMain";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import EVerifyBtn from "@/components/EVerifyBtn";

// Styles
import styles from "./page.module.css";

const ContactUsPage = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main id="Contact-Us-Page" className={styles.contactPage}>
      <NewNavBar />

      <div className={styles.mainBody}>
        {/* Hero Banner Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className={styles.contactUsMainContainer}
        >
          <Image
            src="/images/Contact-us-banner-image.png"
            alt="Contact Us Banner"
            height={700}
            width={1000}
            priority
            className={styles.contactUsLandingImg}
          />
        </motion.section>

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.sectionOne}>
            <motion.div
              className={styles.introTextContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainerVariants}
            >
              <motion.h2
                variants={headingVariants}
                className={`${styles.subTitle} josefin-sans-text`}
              >
                Get In Touch With Us
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className={styles.subtitleUnderline}
              ></motion.div>
              <motion.p
                variants={itemVariants}
                className={`${styles.introText} quicksand-text`}
              >
                We're here to assist you and answer any questions you may have.
                Feel free to reach out to us through any of the contact methods
                below.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              className={styles.imageContainer}
            >
              <Image
                alt="Contact Us Banner"
                src="/images/contact-us-banner-img.jpg"
                height={500}
                width={500}
                priority
                className={styles.bannerImage}
              />
              <div className={styles.imageBorder}></div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className={styles.contactSection}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainerVariants}
            className={styles.contactContainer}
          >
            <motion.div
              variants={itemVariants}
              className={styles.contactHeader}
            >
              <Image
                src="/images/Technotran-logo.png"
                alt="Technotran Logo"
                height={200}
                width={200}
                priority
                className={styles.logoImage}
              />
              <h2 className={`${styles.contactTitle} josefin-sans-text`}>
                Our Contact Information
              </h2>
              <Divider className={styles.divider} />
            </motion.div>

            <div className={styles.contactDetails}>
              <motion.div
                variants={itemVariants}
                className={styles.contactItem}
              >
                <div className={styles.iconContainer}>
                  <LocationOnIcon className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3
                    className={`${styles.contactItemTitle} josefin-sans-text`}
                  >
                    Address
                  </h3>
                  <p className={`${styles.contactText} quicksand-text`}>
                    Technotran office, Near more supermarket,
                    <br />
                    beside Canara bank, Magunta layout, Nellore.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={styles.contactItem}
              >
                <div className={styles.iconContainer}>
                  <EmailIcon className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3
                    className={`${styles.contactItemTitle} josefin-sans-text`}
                  >
                    Email
                  </h3>
                  <p className={`${styles.contactText} quicksand-text`}>
                    info@technotran.in
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={styles.contactItem}
              >
                <div className={styles.iconContainer}>
                  <PhoneIcon className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3
                    className={`${styles.contactItemTitle} josefin-sans-text`}
                  >
                    Contact Numbers
                  </h3>
                  <p className={`${styles.contactText} quicksand-text`}>
                    +91 9000 326 936
                  </p>
                  <p className={`${styles.contactText} quicksand-text`}>
                    +91 9100 103 806
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className={styles.contactItem}
              >
                <div className={styles.iconContainer}>
                  <AccessTimeIcon className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3
                    className={`${styles.contactItemTitle} josefin-sans-text`}
                  >
                    Business Hours
                  </h3>
                  <p className={`${styles.contactText} quicksand-text`}>
                    Monday - Saturday: 9:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>
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
