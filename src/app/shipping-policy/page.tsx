"use client";

import React from "react";
import styles from "./page.module.css";
import NewNavBar from "@/sections/NewNavBar";
import FooterMain from "@/sections/FooterMain";
import EVerifyBtn from "@/components/EVerifyBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import { motion } from "framer-motion";

const ShippingPolicy = () => {
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
          className={styles.shippingPolicyMainContainer}
        >
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} josefin-sans-text`}
            >
              Shipping, Return, Refund Policy
            </motion.h2>
            <div className={styles.shippingPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                SHIPPING POLICY
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`The orders for the user are shipped through registered domestic
                courier companies and/or speed post only. Orders are shipped
                within 10 to 15 days from the date of the order and/or payment
                or as per the delivery date agreed at the time of order
                confirmation and delivering of the shipment, subject to courier
                company / post office norms.`}
              </h3>
              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`Platform Owner shall not be liable for any delay in delivery by the courier company / postal
                authority. Delivery of all orders will be made to the address
                provided by the buyer at the time of purchase. Delivery of our
                services will be confirmed on your email ID as specified at the
                time of registration. If there are any shipping cost(s) levied
                by the seller or the Platform Owner (as the case be), the same
                is not refundable. For any issues in utilizing our services you
                may contact our helpdesk on support@technotran.in.`}
              </h3>
            </div>

            <div className={styles.shippingPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                RETURN POLICY
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`We offer refund / exchange within first 7 days from the date of
                your purchase. If 7 days have passed since your purchase, you
                will not be offered a return, exchange or refund of any kind. In
                order to become eligible for a return or an exchange, (i) the
                purchased item should be unused and in the same condition as you
                received it, (ii) the item must have original packaging, (iii)
                if the item that you purchased on a sale, then the item may not
                be eligible for a return / exchange.`}
              </h3>
              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`Further, only such items are replaced by us (based on an exchange request), if such items
                are found defective or damaged.If you need to place a return /
                exchange request for an eligible product/ item (as applicable)
                you need to send us an email support@technotran.in.You agree
                that there may be a certain category of products / items that
                are exempted from returns or refunds. Such categories of the
                products would be identified to you at the item of purchase. For
                exchange / return accepted request(s) (as applicable), once your
                returned product / item is received and inspected by us, we will
                send you an email to notify you about receipt of the returned /
                exchanged product. Further. If the same has been approved after
                the quality check at our end, your request (i.e. return /
                exchange) will be processed in accordance with our policies.`}
              </h3>
            </div>

            <div className={styles.shippingPolicySubContainer}>
              <h2 className={`${styles.subHeading} josefin-sans-text`}>
                REFUND POLICY
              </h2>

              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`This cancellation policy outlines how you can cancel or seek a
                refund for a product / service that you have purchased through
                the Platform. Under this policy:Cancellations will only be
                considered if the request is made 7days of placing the order.
                However, cancellation request may not be entertained if the
                orders have been communicated to such sellers / merchant(s)
                listed on the Platform and they have initiated the process of
                shipping them, or the product is out for delivery. In such an
                even, you may choose to reject the product at the doorstep.
                We(Technotran) does not accept cancellation requests for
                perishable items like flowers, eatables, etc. However, the
                refund / replacement can be made if the user establishes that
                the quality of the product delivered is not good.In case of
                receipt of damaged or defective items, please report to our
                customer service team.`}
              </h3>
              <h3 className={`${styles.sectionTxt} quicksand-text`}>
                {`The request would be entertained once the
                seller/ merchant listed on the Platform, has checked and
                determined the same at its own end. This should be reported
                within 2-5 days of receipt of products. In case you feel that
                the product received is not as shown on the site or as per your
                expectations, you must bring it to the notice of our customer
                service within 5 of receiving the product. The customer service
                team after looking into your complaint will take an appropriate
                decision.In case of complaints regarding the products that come
                with a warranty from the manufacturers, please refer the issue
                to them.In case of any refunds approved by Technotran , it will
                take 4-5 business days for the refund to be processed to you.`}
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

export default ShippingPolicy;
