"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "../styles/NewNavBar.module.css";
import { MenuItem } from "@/utils/types";



const NewNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const router = useRouter();
  const pathname = usePathname();

  // Navigation menu structure
  const menuItems: MenuItem[] = [
    { title: "HOME", link: "/" },
    {
      title: "TRAINING SOLUTIONS",
      submenu: [
        { title: "Workshops", link: "/workshops" },
        {
          title: "Internships",
          link: "https://internships.technotran.in/",
          external: true,
        },
        { title: "Job Oriented Courses", link: "/job-oriented-courses" },
      ],
    },
    { title: "INDUSTRIAL SOLUTIONS", link: "/industrial-solutions" },
    {
      title: "LAB SOLUTIONS",
      submenu: [
        { title: "School Robotics Lab", link: "/school-robotics-lab" },
        { title: "ATAL Tinkering Lab", link: "/atal-tinkering-lab" },
        { title: "IoT Lab", link: "/iot-lab" },
        { title: "Robotics & ES Lab", link: "/robotics-es-lab" },
        { title: "AR/VR Lab", link: "/ar-vr-lab" },
        { title: "Center Of Excellence", link: "/center-of-excellence" },
        {
          title: "Industrial Lab Solutions",
          link: "/industrial-lab-solutions",
        },
      ],
    },
    {
      title: "PROJECTS",
      submenu: [
        {
          title: "Academic Projects",
          link: "https://embeddedaiprojects.com/",
          external: true,
        },
        { title: "R & D Projects", link: "/r&d-projects" },
      ],
    },
    {
      title: "COMPANY",
      submenu: [
        { title: "About Us", link: "/about-us" },
        { title: "MOU", link: "/mou" },
        { title: "Media & Awards", link: "/media&awards" },
        { title: "Events", link: "/events" },
        { title: "Careers", link: "/careers" },
        { title: "Contact Us", link: "/contact-us" },
      ],
    },
  ];

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsMobileMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isClient]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeDropdown) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleNavigation = (link: string, external?: boolean) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);

    if (external) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  const isActive = (link: string): boolean => {
    // For homepage
    if (link === "/" && pathname === "/") return true;

    // For external links, they can't be active
    if (link.startsWith("http")) return false;

    // For other pages, check if the pathname exactly matches the link
    // or starts with the link followed by a slash or nothing
    const linkPath = link.split("/").filter(Boolean).join("/");
    const currentPath = pathname.split("/").filter(Boolean).join("/");

    return (
      currentPath === linkPath ||
      Boolean(
        linkPath &&
          currentPath.startsWith(linkPath) &&
          (currentPath.length === linkPath.length ||
            currentPath[linkPath.length] === "/")
      )
    );
  };

  const isMenuActive = (title: string): boolean => {
    // For homepage, only HOME should be active
    if (pathname === "/") {
      return title === "HOME";
    }

    // For specific pages, match exactly with their corresponding menu items
    if (pathname === "/industrial-solutions") {
      return title === "INDUSTRIAL SOLUTIONS";
    }

    // For submenu pages, activate their parent menu
    if (
      pathname === "/workshops" ||
      pathname === "/job-oriented-courses" ||
      pathname === "/training-solutions"
    ) {
      return title === "TRAINING SOLUTIONS";
    }

    if (
      pathname === "/school-robotics-lab" ||
      pathname === "/atal-tinkering-lab" ||
      pathname === "/iot-lab" ||
      pathname === "/robotics-es-lab" ||
      pathname === "/ar-vr-lab" ||
      pathname === "/center-of-excellence" ||
      pathname === "/industrial-lab-solutions"
    ) {
      return title === "LAB SOLUTIONS";
    }

    if (pathname === "/projects" || pathname === "/r&d-projects") {
      return title === "PROJECTS";
    }

    if (
      pathname === "/about-us" ||
      pathname === "/mou" ||
      pathname === "/media&awards" ||
      pathname === "/events" ||
      pathname === "/careers" ||
      pathname === "/contact-us"
    ) {
      return title === "COMPANY";
    }

    // Default case - no menu item is active
    return false;
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/images/Technotran-new-logo.png"
              alt="Technotran Logo"
              width={130}
              height={40}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <nav
          className={`${styles.navigation} ${
            isMobileMenuOpen ? styles.mobileOpen : ""
          }`}
        >
          <ul className={styles.navList}>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.navItem} ${
                  isMenuActive(item.title) ? styles.activeNoUnderline : ""
                }`}
              >
                {item.submenu ? (
                  <div
                    ref={(el: HTMLDivElement | null) => {
                      dropdownRefs.current[item.title] = el;
                    }}
                    className={styles.dropdownContainer}
                  >
                    <div
                      className={`${styles.navLink} ${styles.hasDropdown} ${
                        activeDropdown === item.title ? styles.dropdownOpen : ""
                      } ${isMenuActive(item.title) ? styles.activeNoUnderline : ""}`}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <KeyboardArrowDownIcon
                        className={`${styles.dropdownIcon} ${
                          activeDropdown === item.title ? styles.rotated : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`${styles.dropdown} ${
                        activeDropdown === item.title ? styles.show : ""
                      }`}
                    >
                      <ul className={styles.dropdownList}>
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className={styles.dropdownItem}>
                            <div
                              className={`${styles.dropdownLink} ${
                                isActive(subItem.link) ? styles.activeNoUnderline : ""
                              }`}
                              onClick={() =>
                                handleNavigation(subItem.link, subItem.external)
                              }
                            >
                              {subItem.title}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${styles.navLink} ${
                      isActive(item.link || "") ? styles.activeNoUnderline : ""
                    }`}
                    onClick={() => handleNavigation(item.link || "/")}
                  >
                    {item.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NewNavBar;
