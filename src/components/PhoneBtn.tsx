"use client";
import React from "react";
import { Fab } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

const PhoneBtn = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.7 }} // Adjust duration as needed
      href="tel:+91 9000326936"
    >
      <Fab
        color="success"
        aria-label="chat"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: "15px",
          backgroundColor: "#25D366",
          height: "50px",
          width: "50px",
        }}
      >
        <PhoneIcon style={{ fill: "white", fontSize: "1.5rem" }} />
      </Fab>
    </motion.a>
  );
};

export default PhoneBtn;
