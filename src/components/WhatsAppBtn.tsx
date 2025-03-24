"use client";
import React, { useEffect, useState } from "react";
import { Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const WhatsAppBtn = () => {
  const [isClient, setIsClient] = useState(false); // Track if the app is running on the client
  useEffect(() => {
    // Only run this code on the client side
    setIsClient(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (isClient && typeof window !== "undefined") {
      window.open("https://wa.me/919000326936", "_blank");
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.7 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "15px",
        zIndex: "10000",
      }}
    >
      <Tooltip
        title={
          <span
            style={{ fontFamily: "Montserrat, Sans-serif", color: "white" }}
          >
            WhatsApp Us
          </span>
        }
        arrow
        placement="left"
      >
        <Fab
          color="success"
          aria-label="chat"
          onClick={handleWhatsAppClick}
          sx={{ backgroundColor: "#25D366", height: "50px", width: "50px" }}
        >
          <WhatsAppIcon
            color="action"
            style={{ fill: "white", fontSize: "1.5rem" }}
          />
        </Fab>
      </Tooltip>
    </motion.div>
  );
};

export default WhatsAppBtn;
