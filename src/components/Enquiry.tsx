"use client";

import React, { useState } from "react";
import styles from "../styles/Enquiry.page.module.css";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    occupation: "",
    city: "",
    contact: "",
    email: "",
    message: "",
    service: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Snackbar State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" or "error"
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);

    // Ensure environment variables are defined, otherwise throw an error
    const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const public_key = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    if (!service_id || !template_id || !public_key) {
      console.error("Missing EmailJS environment variables.");
      setSnackbar({
        open: true,
        message: "Configuration error. Please try again later.",
        severity: "error",
      });
      return;
    }

    try {
      await emailjs
        .send(
          service_id, // Service ID
          template_id, // Template ID
          {
            fullName: formData.fullName,
            college: formData.college,
            occupation: formData.occupation,
            city: formData.city,
            contact: formData.contact,
            email: formData.email,
            message: formData.message,
            service: formData.service,
          },
          public_key // Public Key
        )
        .then(
          (response) => {
            if (response.text === "Ok") {
              setSnackbar({
                open: true,
                message: "Email sent successfully!",
                severity: "success",
              });
              setFormData({
                fullName: formData.fullName,
                college: formData.college,
                occupation: formData.occupation,
                city: formData.city,
                contact: formData.contact,
                email: formData.email,
                message: formData.message,
                service: formData.service,
              });
            }
          },
          (error) => {
            console.log("Error:", error);
            setSnackbar({
              open: true,
              message: "Failed to send email. Please try again.",
              severity: "error",
            });
          }
        );

      setFormData({
        fullName: "",
        college: "",
        occupation: "",
        city: "",
        contact: "",
        email: "",
        message: "",
        service: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
    }
  };

  return (
    <div className={styles.enquiryWrapper}>
      <div className={styles.enquiryContainer}>
        <div className={styles.formSection}>
          <motion.div
            className={styles.formHeader}
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: true }}
          >
            <h2 className={`${styles.formTitle} josefin-sans-text`}>
              Send Us a Message
            </h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <form
            id="Enquiry Form"
            onSubmit={handleSubmit}
            className={styles.formContainer}
          >
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="college">
                  College
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  placeholder="Enter college name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="service">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={styles.selectInput}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Training Solutions">Training Solutions</option>
                  <option value="Industrial Solutions">
                    Industrial Solutions
                  </option>
                  <option value="Lab Solutions">Lab Solutions</option>
                  <option value="Projects">Projects</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="MOU">MOU</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="occupation">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  placeholder="Enter occupation"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter city"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="contact">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder="Enter contact number"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className="quicksand-text" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className="quicksand-text" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`${styles.submitButton} quicksand-text`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Enquiry
            </motion.button>
          </form>
        </div>

        <div className={styles.contactSection}>
          <motion.div
            className={styles.contactHeader}
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: true }}
          >
            <h2 className={`${styles.contactTitle} josefin-sans-text`}>
              Let's Talk
            </h2>
            <div className={styles.titleUnderline}></div>
          </motion.div>

          <div className={styles.contactInfo}>
            <motion.div
              className={styles.contactItem}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.contactIcon}>
                <PhoneInTalkIcon sx={{ fill: "white" }} />
              </div>
              <div className={styles.contactText}>
                <h4 className="josefin-sans-text">Phone</h4>
                <p className="quicksand-text">+91 9000 326 936</p>
                <p className="quicksand-text">+91 9100 103 806</p>
              </div>
            </motion.div>

            <motion.div
              className={styles.contactItem}
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.contactIcon}>
                <EmailIcon sx={{ fill: "white" }} />
              </div>
              <div className={styles.contactText}>
                <h4 className="josefin-sans-text">Email</h4>
                <p className="quicksand-text">admin@technotran.in</p>
              </div>
            </motion.div>
          </div>

          <div className={styles.contactButtons}>
            <motion.a
              variants={headingVariants}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05, backgroundColor: "#3a0304" }}
              className={styles.contactButton}
              href="tel:+91 9000326936"
              transition={{ delay: 0.4 }}
            >
              <PhoneInTalkIcon
                sx={{ fontSize: "20px", fill: "white", marginRight: "8px" }}
              />
              Call Us
            </motion.a>
            <motion.a
              variants={headingVariants}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.05, backgroundColor: "#3a0304" }}
              className={styles.contactButton}
              href="mailto:admin@technotran.in"
              transition={{ delay: 0.5 }}
            >
              <SendIcon
                sx={{ fontSize: "20px", fill: "white", marginRight: "8px" }}
              />
              Email Us
            </motion.a>
          </div>
        </div>
      </div>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity as "success" | "error"}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EnquiryForm;
