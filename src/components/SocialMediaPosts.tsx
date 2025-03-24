"use client"; // If using a Client Component

import { useEffect, useState } from "react";
// import {
//   InstagramEmbed,
//   TwitterEmbed,
//   FacebookEmbed,
// } from "react-social-media-embed";
import styles from "../app/media&awards/page.module.css";

export default function SocialMediaEmbed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <div className="socialMediaContainer">
      {/* LinkedIn Embed */}
      <div className={styles.socialMediaItem}>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7272577338662383616"
          height="1236"
          width="504"
          frameBorder="0"
          allowFullScreen
          title="Embedded post"
        />
      </div>

      {/* Twitter (X) Embed */}
      {/* <div className={styles.socialMediaItem}>
        <TwitterEmbed
          url="https://x.com/TheCconnects/status/1866812252214661506"
          width={500}
        />
      </div> */}

      {/* Facebook Embed */}
      {/* <div className={styles.socialMediaItem}>
        <FacebookEmbed
          url="https://www.facebook.com/TheCconnects/posts/pfbid0u5nogDLwEywRdTx1RWGBzFZykYFH5V9foHAc8ietqSZHSY4pFnYbmnviXpHD5Akvl"
          width={500}
        />
      </div> */}

      {/* YouTube Community Post - Using Direct Link */}
      {/* <div className={styles.socialMediaItem}>
        <a
          href="https://www.youtube.com/channel/UCBXm9cAfMek1aX3D0pQH7-w/community?lb=Ugkx8_aGr2yd_uYpUmZdGGxjuvwMIkW_7B3Q"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View on YouTube Community
        </a>
      </div> */}

      {/* Instagram Embed */}
      {/* <div className={styles.socialMediaItem}>
        <InstagramEmbed
          url="https://www.instagram.com/p/DDb92mAy1br/?hl=en"
          width={500}
        />
      </div> */}
    </div>
  );
}
