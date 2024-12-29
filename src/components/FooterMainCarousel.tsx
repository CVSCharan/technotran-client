/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import styles from "../styles/FooterMain.module.css";
import Image from "next/image";
import { footerMainCarouselData } from "@/utils/helpers";

const FooterMainCarousel = () => {
  const carouselRef = useRef<any>(null); // Ref for the Carousel component

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={cardVariants}
      className={styles.carouselContainer}
    >
      <Carousel
        ref={carouselRef}
        arrows={false}
        autoplay
        autoplaySpeed={2500}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {footerMainCarouselData.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={item.imgSrc}
              alt={`Footer main carousel img${index}`}
              height={200}
              width={200}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default FooterMainCarousel;