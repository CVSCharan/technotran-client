"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import { motion } from "framer-motion";

const TermsAndContidions = () => {
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
          className={styles.termsMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Terms and Conditions
            </motion.h2>
            <div className={styles.termsSubContainer}>
              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`This document is an electronic record in terms of Information
                Technology Act, 2000 and rules there under as applicable and the
                amended provisions pertaining to electronic records in various
                statutes as amended by the Information Technology Act, 2000.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`This electronic record is generated by a computer system and
                does not require any physical or digital signatures. This
                document is published in accordance with the provisions of Rule
                3 (1) of the Information Technology (Intermediaries guidelines)
                Rules, 2011 that require publishing the rules and regulations,
                privacy policy and Terms of Use for access or usage of domain
                name [Enter domain name] “TECHNOTRAN”, including the related
                mobile site and mobile application (hereinafter referred to as
                “Platform”).`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`The Platform is owned by (Enter name of the company)
                , a company incorporated under the Companies Act, 1956 with its
                registered office at (Enter Address) (hereinafter referred to as
                “Platform Owner”, “we”, “us”, “our”).Your use of the Platform
                and services and tools are governed by the following terms and
                conditions (“Terms of Use”) as applicable to the Platform
                including the applicable policies which are incorporated herein
                by way of reference. If You transact on the Platform, You shall
                be subject to the policies that are applicable to the Platform
                for such transaction.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`By mere use of the Platform, You shall be
                contracting with the Platform Owner and these terms and
                conditions including the policies constitute Your binding
                obligations, with Platform Owner. These Terms of Use relate to
                your use of our website, goods (as applicable) or services (as
                applicable) (collectively, “Services”). Any terms and conditions
                proposed by You which are in addition to or which conflict with
                these Terms of Use are expressly rejected by the Platform Owner
                and shall be of no force or effect.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`These Terms of Use can be modified at any time without assigning
                any reason. It is your responsibility to periodically review
                these Terms of Use to stay informed of updates.For the purpose
                of these Terms of Use, wherever the context so requires “you”,
                “your” or “user” shall mean any natural or legal person who has
                agreed to become a user/buyer on the Platform.ACCESSING,
                BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR
                AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF
                USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE
                PROCEEDING.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`The use of Platform and/or availing of our Services
                is subject to the following Terms of Use:To access and use the
                Services, you agree to provide true, accurate and complete
                information to us during and after registration, and you shall
                be responsible for all acts done through the use of your
                registered account on the Platform.Neither we nor any third
                parties provide any warranty or guarantee as to the accuracy,
                timeliness, performance, completeness or suitability of the
                information and materials offered on this website or through the
                Services, for any specific purpose.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`You acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.Your use of our Services and the Platform is solely and
                entirely at your own risk and discretion for which we shall not
                be liable to you in any manner. You are required to
                independently assess and ensure that the Services meet your
                requirements.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`The contents includes and is not
                limited to the design, layout, look and graphics.You acknowledge
                that unauthorized use of the Platform and/or the Services may
                lead to action against you as per these Terms of Use and/or
                applicable laws.You agree to pay us the charges associated with
                availing the Services.You agree not to use the Platform and/ or
                Services for any purpose that is unlawful, illegal or forbidden
                by these Terms, or Indian or local laws that might apply to
                you.You agree and acknowledge that website and the Services may
                contain links to other third party websites. On accessing these
                links, you will be governed by the terms of use, privacy policy
                and such other policies of such third party websites.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`These links are provided for your convenience for provide
                further information.You understand that upon initiating a
                transaction for availing the Services you are entering into a
                legally binding and enforceable contract with the Platform Owner
                for the Services.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`You shall indemnify and hold harmless Platform
                Owner, its affiliates, group companies (as applicable) and their
                respective officers, directors, agents, and employees, from any
                claim or demand, or actions including reasonable attorneys’
                fees, made by any third party or penalty imposed due to or
                arising out of Your breach of this Terms of Use, privacy Policy
                and other Policies, or Your violation of any law, rules or
                regulations or the rights (including infringement of
                intellectual property rights) of a third party. In no event will
                the Platform Owner be liable for any indirect, consequential,
                incidental, special or punitive damages, including without
                limitation damages for loss of profits or revenues, business
                interruption, loss of business opportunities, loss of data or
                loss of other economic interests, whether in contract,
                negligence, tort or otherwise, arising from the use of or
                inability to use the Services, however caused and whether
                arising in contract, tort, negligence, warranty or otherwise,
                exceed the amount paid by You for using the Services giving rise
                to the cause of action or Rupees One Hundred (Rs. 100) whichever
                is lessNotwithstanding anything contained in these Terms of Use,
                the parties shall not be liable for any failure to perform an
                obligation under these Terms if performance is prevented or
                delayed by a force majeure event.`}
              </h3>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`These Terms and any dispute or
                claim relating to it, or its enforceability, shall be governed
                by and construed in accordance with the laws of India.All
                disputes arising out of or in connection with these Terms shall
                be subject to the exclusive jurisdiction of the courts in (Enter
                City and State) All concerns or communications relating to these
                Terms must be communicated to us using the contact information
                provided on this website.`}
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

export default TermsAndContidions;
