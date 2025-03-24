/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "react-use-gesture";
import { Carousel } from "antd";
import styles from "../styles/IndustriesWeServe.module.css";
import { motion } from "framer-motion";
import { industriesWeServeCarouselData } from "@/utils/helpers";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const IndustriesWeServe = () => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  const bind = useScroll((state) => {
    set({ y: state.offset[1] });
  });

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

  // Custom functions to control the carousel
  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const carouselRef = React.useRef<any>(null); // Ref for the Carousel component

  // Settings for the carousel responsiveness
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    speed: 700,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1600, // Extra large screens
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200, // Large screens
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 992, // Medium screens
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 576, // Small tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className={styles.industriesWeServeSection} {...bind()}>
      {/* Parallax Background */}
      <animated.div
        style={{
          transform: y.to((y) => `translateY(${y * 0.3}px)`),
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://github.com/CVSCharan/Technotran_Assets/blob/main/pattern1.jpg?raw=true')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          zIndex: -1,
        }}
      />
      {/* Content */}
      <div className={styles.overlay}></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className={styles.contentContainer}
      >
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.title} josefin-sans-text`}
        >
          Industry Expertise
        </motion.h2>

        {/* Carousel */}
        <div className={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            {...settings}
          >
            {industriesWeServeCarouselData.map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    priority
                    height={400}
                    width={400}
                    src={item.imgSrc}
                    alt={item.title}
                    className={styles.carouselImage}
                  />
                </div>
                <div className={styles.carouselContent}>
                  <h3 className={`${styles.carouselTitle} quicksand-text`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Custom Arrows with MUI Icons */}
        <div className={styles.customControls}>
          <button className={styles.prevButton} onClick={goToPrev}>
            <ArrowBackIosNewIcon />
          </button>
          <button className={styles.nextButton} onClick={goToNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustriesWeServe;
