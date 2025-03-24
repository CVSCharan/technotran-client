"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
    <main>
      <NewNavBar />
      <div className={styles.mainBody}>
        <section
          id="Technotran Privacy Policy Landing"
          className={styles.privacyPolicyMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Privacy Policy
            </motion.h2>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                Introduction
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                TECHNOTRAN SOLUTIONS is committed to protecting the privacy of
                our website visitors. This privacy policy explains how we
                collect, use, and share your personal information when you visit
                our website.
              </h3>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                What information do we collect?
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                We collect the following types of personal information from you
                when you visit our website: Contact information: This includes
                your name, email address, and phone number.
              </h3>

              <ul className={styles.list}>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  <strong>Usage information:</strong> This includes information
                  about the pages you visit on our website, the links you click,
                  and the search terms you use.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  <strong>Technical information:</strong> This includes
                  information about your computer’s IP address, operating
                  system, and browser type.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  <strong>Payment information:</strong> If you make a purchase
                  on our website, we will collect your payment information, such
                  as your credit card number and billing address.
                </li>
              </ul>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                How do we use your information?
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                We use your personal information for the following purposes:
              </h3>

              <ul className={styles.list}>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  To provide you with the services you request, such as
                  responding to your inquiries or processing your orders.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  To improve our website and services by analyzing your usage
                  data.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  To send you marketing communications about our products and
                  services.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  To comply with our legal obligations.
                </li>
              </ul>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                Who has access to your information?
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                We may share your personal information with the following third
                parties:
              </h3>

              <ul className={styles.list}>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Our service providers, who help us operate our website and
                  provide our services.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Our marketing partners, who help us deliver marketing
                  communications to you.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Payment processors, who process your payments for us.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Government agencies, if required by law.
                </li>
              </ul>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                How do we protect your information?
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                We take measures to protect your personal information from
                unauthorized access, use, disclosure, alteration, or
                destruction. These measures include:
              </h3>

              <ul className={styles.list}>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Using secure servers to store your personal information.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Using encryption to protect your personal information when it
                  is transmitted over the internet.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Limiting access to your personal information to authorized
                  employees and contractors.
                </li>
                <li className={`${styles.sectionTxt} quicksand-text`}>
                  Implementing security policies and procedures.
                </li>
              </ul>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                How long do we keep your information?
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                We will keep your personal information for as long as necessary
                to provide you with the services you request or for as long as
                required by law.
              </h3>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                Your rights
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                You have certain rights regarding your personal information,
                including the right to access, correct, or delete your data. You
                can also choose to opt-out of receiving promotional
                communications from us. To exercise these rights or modify your
                preferences, please contact us at support@technotran.in
              </h3>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                Changes to this privacy policy
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                We may update this privacy policy from time to time. The most
                recent version of the privacy policy will always be available on
                our website.
              </h3>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                Contact us
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                If you have any questions about this privacy policy, please
                contact us at: support@technotran.in
              </h3>
            </div>
            <div className={styles.privacyPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                Governing law
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                This privacy policy is governed by the laws of the Republic of
                India.
              </h3>
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

export default PrivacyPolicy;
