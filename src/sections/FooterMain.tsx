"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/FooterMain.module.css";
import {
  Phone,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  LocationOn,
} from "@mui/icons-material";
import FooterMainCarousel from "@/components/FotterMainCarousel";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterMain = () => {
  const [isClient, setIsClient] = useState(false);
  const [isHomeRoute, setIsHomeRoute] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSocialIconsClick = (link: string) => {
    if (isClient && typeof window !== "undefined") window.open(link, "_blank");
  };

  useEffect(() => {
    setIsHomeRoute(pathname === "/");
  }, [pathname]);

  // Footer sections data
  const whoAreWeLinks = [
    { name: "About Us", link: "/about-us" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Help & Support", link: "/help-support" },
    { name: "Terms And Conditions", link: "/terms&conditions" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  const whatWeOfferLinks = [
    { name: "Training Solutions", link: "/training-solutions" },
    { name: "Industrial Solutions", link: "/industrial-solutions" },
    { name: "Lab Solutions", link: "/lab-solutions" },
    { name: "Job Exchange", link: "/job-exchange" },
    { name: "Skill India Map", link: "/skill-india-map" },
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Workshops", link: "/workshops" },
    { name: "MOU", link: "/mou" },
    { name: "Media & Awards", link: "/media&awards" },
    { name: "Events", link: "/events" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 9000 326 936" },
    { icon: Phone, text: "+91 9100 103 806" },
    { icon: Email, text: "info@technotran.in" },
    // { 
    //   icon: LocationOn, 
    //   text: "Technotran office, Plot-24/2, Magunta layout, Nellore, A.P - 524003" 
    // },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      color: "#1877F2",
      link: "https://www.facebook.com/technotran?mibextid=ZbWKwL",
    },
    {
      icon: Instagram,
      color: "#cd486b",
      link: "https://www.instagram.com/technotran/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    },
    {
      icon: LinkedIn,
      color: "#0077B5",
      link: "https://www.linkedin.com/company/technotran/",
    },
    {
      icon: YouTube,
      color: "#FF0000",
      link: "https://www.youtube.com/@TechnoTran",
    },
  ];

  return (
    <footer className={styles.footerMainSection}>
      <section className={styles.footerCarouselSection}>
        <FooterMainCarousel />
      </section>
      
      {/* Main Footer Content */}
      <section className={styles.footerContentSection}>
        <div className={styles.footerColumnsContainer}>
          {/* WHO ARE WE Column */}
          <div className={styles.footerColumn}>
            <h2 className={styles.footerColumnTitle}>WHO ARE WE</h2>
            <ul className={styles.footerLinksList}>
              {whoAreWeLinks.map((link, index) => (
                <li key={index} className={styles.footerLinkItem}>
                  <Link href={link.link} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT WE OFFER Column */}
          <div className={styles.footerColumn}>
            <h2 className={styles.footerColumnTitle}>WHAT WE OFFER</h2>
            <ul className={styles.footerLinksList}>
              {whatWeOfferLinks.map((link, index) => (
                <li key={index} className={styles.footerLinkItem}>
                  <Link href={link.link} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS Column */}
          <div className={styles.footerColumn}>
            <h2 className={styles.footerColumnTitle}>QUICK LINKS</h2>
            <ul className={styles.footerLinksList}>
              {quickLinks.map((link, index) => (
                <li key={index} className={styles.footerLinkItem}>
                  <Link href={link.link} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact and Social Media Section */}
        <div className={styles.footerBottomSection}>
          <div className={styles.footerContactSection}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.contactItem}>
                <info.icon className={styles.contactIcon} />
                <span className={styles.contactText}>{info.text}</span>
              </div>
            ))}
          </div>

          <div className={styles.footerSocialSection}>
            {socialLinks.map(({ icon: Icon, color, link }, index) => (
              <Icon
                key={index}
                style={{ fill: color }}
                onClick={() => handleSocialIconsClick(link)}
                className={styles.socialIcon}
              />
            ))}
          </div>

          <div className={styles.footerLogoSection}>
            <Image
              src="/images/Technotran-logo.png"
              alt="Technotran Logo"
              height={80}
              width={200}
              priority
              className={styles.footerLogo}
            />
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyrightSection}>
          <p className={styles.copyrightText}>
            © 2016 - 2025 All rights reserved - Technotran Solutions.
          </p>
          {isHomeRoute && (
            <p className={styles.developerText}>Developed by CVS CHARAN</p>
          )}
        </div>
      </section>
    </footer>
  );
};

export default FooterMain;
