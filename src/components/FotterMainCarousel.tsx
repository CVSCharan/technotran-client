/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/FooterMain.module.css";
import Image from "next/image";
import { footerMainCarouselData } from "@/utils/helpers";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FooterMainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [visibleCards, setVisibleCards] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Set up client-side rendering and responsive card count
  useEffect(() => {
    setIsClient(true);
    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Update number of visible cards based on screen width
  const updateVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1200) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 576) {
        setVisibleCards(3);
      } else {
        setVisibleCards(2);
      }
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Handle autoplay
  useEffect(() => {
    if (isClient) {
      startAutoplay();
      return () => stopAutoplay();
    }
  }, [isClient]);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      goToNext();
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Navigation functions
  const goToPrev = () => {
    stopAutoplay();
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? footerMainCarouselData.length - 1 : prevIndex - 1;
      return newIndex;
    });
    setTimeout(startAutoplay, 500);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % footerMainCarouselData.length);
  };

  // Create array of visible cards
  const getVisibleCards = () => {
    const cards = [];
    const totalItems = footerMainCarouselData.length;
    
    for (let i = 0; i < visibleCards; i++) {
      const dataIndex = (currentIndex + i) % totalItems;
      cards.push({
        ...footerMainCarouselData[dataIndex],
        index: dataIndex,
      });
    }
    return cards;
  };

  if (!isClient) {
    return null; // Prevent SSR issues
  }

  return (
    <div className={styles.partnerCarouselWrapper}>
      <div
        className={styles.cardsCarouselContainer}
        ref={carouselRef}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <button
          className={`${styles.carouselNavButton} ${styles.prevButton}`}
          onClick={goToPrev}
          aria-label="Previous"
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </button>

        <div className={styles.cardsContainer}>
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisibleCards().map((item, idx) => (
              <motion.div
                key={`card-${item.index}-${idx}-${currentIndex}`}
                className={styles.partnerCard}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                layout
              >
                <div className={styles.partnerImageWrapper}>
                  <Image
                    src={item.imgSrc}
                    alt={`Partner ${item.index + 1}`}
                    height={100}
                    width={150}
                    className={
                      item.index === 2
                        ? styles.partnerImageSpecial
                        : styles.partnerImage
                    }
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button
          className={`${styles.carouselNavButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default FooterMainCarousel;
