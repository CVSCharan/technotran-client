/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import styles from "../styles/Testimonials.module.css";
import { testimonialsCarouselData } from "@/utils/helpers";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials = () => {
  const carouselRef = useRef<any>(null);
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

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

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const toggleReadMore = (id: number) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
      id="Testimonials"
      className={styles.testimonialsSection}
    >
      <div className={styles.mainContainer}>
        <div className={styles.sectionHeader}>
          <motion.h2
            variants={headingVariants}
            className={`${styles.title} josefin-sans-text`}
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            variants={headingVariants}
            className={styles.titleUnderline}
          ></motion.div>
          <motion.p
            variants={headingVariants}
            className={`${styles.subtitle} quicksand-text`}
          >
            What our clients say about our services
          </motion.p>
        </div>

        <motion.div
          variants={cardVariants}
          className={styles.carouselContainer}
        >
          <Carousel ref={carouselRef} {...settings}>
            {testimonialsCarouselData.map((item) => {
              const isExpanded = expandedIds[item.id] || false;
              const shortDesc =
                item.desc.length > 170
                  ? `${item.desc.substring(0, 170)}...`
                  : item.desc;

              return (
                <div key={item.id} className={styles.carouselItem}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.cardContent}>
                      <div className={styles.quoteIconTop}>
                        <FormatQuoteIcon className={styles.quoteIconSvg} />
                      </div>

                      <div className={styles.descriptionContainer}>
                        <p className={`${styles.description} quicksand-text`}>
                          {isExpanded ? item.desc : shortDesc}
                        </p>
                        {item.desc.length > 170 && (
                          <button
                            className={`${styles.readMoreBtn} josefin-sans-text`}
                            onClick={() => toggleReadMore(item.id)}
                          >
                            {isExpanded ? "Read less" : "Read more"}
                          </button>
                        )}
                      </div>

                      {!isExpanded && (
                        <div className={styles.authorInfo}>
                          <div className={styles.cardImage}>
                            <Image
                              className={styles.cardImg}
                              priority
                              height={80}
                              width={80}
                              src={item.imgSrc}
                              alt={`Testimonial from ${item.name}`}
                            />
                          </div>
                          <div className={styles.authorDetails}>
                            <h3
                              className={`${styles.authorName} josefin-sans-text`}
                            >
                              {item.name}
                            </h3>
                            <p
                              className={`${styles.authorDesignation} josefin-sans-text`}
                            >
                              {item.designation}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className={styles.quoteIconBottom}>
                        <FormatQuoteIcon className={styles.quoteIconSvg} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </motion.div>

        <div className={styles.customControls}>
          <button
            className={styles.prevButton}
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <ArrowBackIosNewIcon />
          </button>
          <button
            className={styles.nextButton}
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
