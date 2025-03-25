import {
  CareersDataItem,
  DesignServicesDataItem,
  EventsDataItem,
  FooterMainCarouselDataItem,
  IndustrialLabSolDataItem,
  IndustriesWeServeCarouselDataItem,
  JobOrientedCoursesDataItem,
  MouDataItem,
  SchoolRoboticsLabImgsDataItem,
  TestimonialsCarouselDataItem,
  TrainingServicesItem,
  ValuedClientsDataItem,
  WhyChooseUsItem,
} from "./types";

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 1,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/why-choose-technotran.png?raw=true",
    desc: "Technotran Solutions, an innovative edu-tech company, stands out for its expertise in diverse fields including robotics, IoT, embedded systems, 3D printing, and PCB design.",
  },
  {
    id: 2,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/why-choose-technotran-2.png?raw=true",
    desc: "Technotran Solutions provide cutting-edge manufacturing technologies including CNC cutters, laser cutting machines, and 3D printers to deliver premium project kits and products customized for both educational and industrial applications.",
  },
  {
    id: 3,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/why-choose-technotran-3.png?raw=true",
    desc: "Choose Technotran Solutions for unparalleled training services, offering a wide range of opportunities including internships, workshops, and online courses, providing practical skills and knowledge for career advancement.",
  },
];

export const trainingServicesData: TrainingServicesItem[] = [
  {
    id: 1,
    type: "Workshops",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/workshops-1.png?raw=true",
    desc: "Unlock Your Potential with Hands-On Workshops at Technotran",
  },
  {
    id: 2,
    type: "Internships",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Internships.png?raw=true",
    desc: "Gain Valuable Experience with Technotran's Internship Programs",
  },
  {
    id: 3,
    type: "Job-Oriented-Courses",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/job-oriented-courses.png?raw=true",
    desc: "Launch Your Career with Industry-Ready Skills from Technotran",
  },
];

export const industriesWeServeCarouselData: IndustriesWeServeCarouselDataItem[] =
  [
    {
      id: 1,
      title: "Agriculture",
      imgSrc:
        "https://github.com/CVSCharan/Technotran_Assets/blob/main/Agriculture-1.png?raw=true", // Replace with your image URL
    },
    {
      id: 2,
      title: "Educational Robatics",
      imgSrc:
        "https://github.com/CVSCharan/Technotran_Assets/blob/main/Educational-Robotics-1.png?raw=true", // Replace with your image URL
    },
    {
      id: 3,
      title: "Electronics Industry",
      imgSrc:
        "https://github.com/CVSCharan/Technotran_Assets/blob/main/Electronics-Industry-1.png?raw=true", // Replace with your image URL
    },
    {
      id: 4,
      title: "IOT Industry",
      imgSrc:
        "https://github.com/CVSCharan/Technotran_Assets/blob/main/IOT-industry-1.png?raw=true", // Replace with your image URL
    },
    {
      id: 5,
      title: "Industrial Automation",
      imgSrc:
        "https://github.com/CVSCharan/Technotran_Assets/blob/main/Industrial-Automation-1.png?raw=trueg", // Replace with your image URL
    },
  ];

export const valuedClientsData: ValuedClientsDataItem[] = [
  {
    id: 1,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Vemu-Institute-of-Technology-Chittoor.png?raw=true",
    name: "Vemu Institute of Technology, Chittoor",
  },
  // {
  //   id: 2,
  //   imgSrc:
  //     "https://github.com/CVSCharan/Technotran_Assets/blob/main/SV-college-of-Engineering-Kadapa.png?raw=true",
  //   name: "SV college of Engineering, Kadapa",
  // },
  {
    id: 2,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/CMR-College-Hyderabad-new-Logo.jpg?raw=true",
    name: "CMR College of Engineering & Technology",
  },
  {
    id: 3,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/SV-Colleges-Tirupati.png?raw=true",
    name: "SV Colleges, Tirupati",
  },
  {
    id: 4,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/VNR-VJIET-Hyderabad.png?raw=true",
    name: "VNR VJIET, Hyderabad",
  },
  {
    id: 5,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/S.A-Engineering-College-Chennai.png?raw=true",
    name: "S.A Engineering College, Chennai",
  },
  {
    id: 6,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Rainbow-International-School-Nellore.png?raw=true",
    name: "Rainbow International School, Nellore",
  },
  {
    id: 7,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Prakasam-Engineering-college-Kandukur.png?raw=true",
    name: "Prakasam Engineering college, Kandukur",
  },
  {
    id: 8,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/NBKR-Institute-of-Science-Technology.png?raw=true",
    name: "NBKR Institute of Science & Technology",
  },
  {
    id: 9,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/PBR-Visvodaya-Technical-Academy-Kavali.png?raw=true",
    name: "PBR Visvodaya Technical Academy, Kavali",
  },
  {
    id: 10,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Narayana-Engineering-College-Nellore-Gudur.png?raw=true",
    name: "Narayana Engineering College, Nellore & Gudur",
  },
  // {
  //   id: 11,
  //   imgSrc:
  //     "https://github.com/CVSCharan/Technotran_Assets/blob/main/Laki-Reddy-Bali-Reddy-College-of-Engineering-Vijayawada.png?raw=true",
  //   name: "Laki Reddy Bali Reddy College of Engineering, Vijayawada",
  // },
  {
    id: 12,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/GIST-Gangavaram-new-logo.jpg?raw=true",
    name: "Geethanjali College of Engineering & technology, Hyderabad",
  },
  {
    id: 13,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Bhoj-reddy-Engineering-college-for-women-Hyderabad.png?raw=true",
    name: "Bhoj reddy Engineering college for women, Hyderabad",
  },
  {
    id: 14,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Audisankara-College-of-Engineering-Technology-Gudur.png?raw=true",
    name: "Audisankara College of Engineering & Technology, Gudur",
  },
  {
    id: 15,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Annamacharya-university-new-Logo.png?raw=true",
    name: "Annamacharya Institute of Technology & sciences, Rajampet",
  },
  {
    id: 16,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Sree-Chaitanya.png?raw=true",
    name: "Sree Chaitanya",
  },
];

export const testimonialsCarouselData: TestimonialsCarouselDataItem[] = [
  {
    id: 1,
    desc: "Heartfelt Thanks to the entire team at Technotran for conducting the enlightening Skill Orientation on Arduino. This workshop has been a valuable learning experience for all participants, especially for beginners in microcontroller programming. We'd also like to express our appreciation to all the participants who actively engaged and contributed to the success of this program. we look forward to applying the knowledge and skills acquired here in our future endeavours. We hope to continue our association with Technotran. Thank you for this wonderful opportunity.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560418/Technotran%20Assets/ldymgf9up4wkp2usv3hw.png",
    name: "Prof. K Dhanunjaya",
    designation: "ECE, HOD, ASCET, Gudur",
  },
  {
    id: 2,
    desc: "We extend our appreciation to the Technotran team for arranging a specialized 2-day workshop for our ECE students. This workshop equipped our students with a deep understanding of PCB design and simulation method. The knowledge gained in this workshop is invaluable, and we are confident it will be applied in future technological endeavors.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560418/Technotran%20Assets/rgrq7tpkxyetrklwfclv.png",
    name: "Dr. S Leela lakshmi",
    designation: "ECE, HOD, VIT,Chittoor",
  },
  {
    id: 3,
    desc: "I'd like to thank Technotran for arranging an IoT workshop at our college. This workshop was a fantastic hands-on learning experience, helping our ECE students understand IoT better and sparking ideas for their final projects. Our ECE students actively took part and responded positively, which was great. Technotran's commitment and knowledge in delivering this workshop left a strong impression, and we're excited about future opportunities like this.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560418/Technotran%20Assets/prkqpn5vgqypergxexzh.png",
    name: "Dr. K Murali",
    designation: "ECE, HOD, NEC, Nellore",
  },
  {
    id: 4,
    desc: "Thanks to Technotran for hosting a successful 4-day workshop on PCB design and application development for our 2nd-year BTech ECE students. The students performed well, and we believe this knowledge will benefit them in the future. We look forward to future collaborations with Technotran.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560417/Technotran%20Assets/rl2ejphor1hgr3woz0l6.png",
    name: "Dr. S Rajendra prasad",
    designation: "ECE, HOD, VNR VJIT, HYD",
  },
  {
    id: 5,
    desc: "Invited Technotran Team for 1 week certification course on Embedded systems. Students showed so much interest during training, as all the sessions were complete hands-on. It was a very good experience to have such workshop in our college. I’am sure that everyone will do academic projects on their own.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560417/Technotran%20Assets/u6ikhygdbswtjg5plho5.png",
    name: "Dr. Y Padma Sai",
    designation: "ECE, HOD, VNR VJIT, HYD",
  },
  {
    id: 6,
    desc: "We express our gratitude to the Technotran team for hosting an insightful 2-day workshop on Bluetooth Robotics with Raspberry PI PICO. This workshop offered our Second-year students valuable insights into Raspberry pi basics and Robotics. The teaching methodology was highly effective, and we anticipate further collaborations in the future.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560417/Technotran%20Assets/dam0ua2pohoddljjatbe.png",
    name: "Dr. D Srinivasulu Reddy",
    designation: "ECE, HOD, SVCE, TPT",
  },
  {
    id: 7,
    desc: "A big thank you to Technotran for the fantastic 3-day Auto-bots workshop. Our first-year students learned Arduino and Robotics basics, improving their technical skills for the future. Great job!",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560417/Technotran%20Assets/wodocpfpxian3xquwona.png",
    name: "Dr. N Sudhakar Reddy",
    designation: "Principal, SVCE, TPT",
  },
  {
    id: 8,
    desc: "A lot of thanks to Technotran team for organizing 3 workshops on PCB Design, Robotics & Embedded Systems for B.Tech 2nd, 3rd & 4th students at our campus. We for tremendous response from the students. I am looking forward to organize more workshops like this to boost up and to motivates students towards technical side.",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1741560418/Technotran%20Assets/qhzcrtp9saxgfws1a3ht.png",
    name: "Dr. J M Mathana",
    designation: "ECE, HOD, SA Engineering college, Chennai",
  },
  {
    id: 9,
    desc: "As the Head of the Department, I want to thank the Technotran team for arranging the Raspberry Pi Pico with Python workshop at our college. It's been a great hands-on learning experience for our students, helping them better understand Raspberry Pi and Python programming. I'm impressed by Technotran dedication and expertise in delivering this workshop, and our students actively participated. This workshop has been an excellent opportunity for students, and we appreciate Technotran team expertise.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Picture11.png?raw=true",
    name: "Prof. P Srinivasulu Reddy",
    designation: "HOD, NEC, Gudur",
  },
  {
    id: 10,
    desc: "As the Head of the Department, I would like to extend my gratitude to the Technotran team for organizing the workshops on the Internet of Robotic Things (IoRT) and Edge AI at our college. These sessions have been excellent hands-on learning experiences for our students, enabling them to gain a deeper understanding of IoRT and Edge AI concepts. These workshops have provided invaluable opportunities for our students, and we sincerely appreciate the Technotran team's commitment and expertise.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/CMR-College-Testimonial-Image.jpg?raw=true",
    name: "Dr. P.Raveendra Babu",
    designation: "HOD, ECE, CMRCET, Hyderabad",
  },
  {
    id: 11,
    desc: "We would like to express our gratitude to the Technotran team for organizing the Arduino Workshop at our college. The workshop provided an invaluable hands-on learning experience for our students, greatly enriching their understanding of Arduino projects and programming. This initiative has unquestionably offered our students a valuable educational experience, and we extend our sincere thanks to the Technotran team for their exemplary efforts in making this workshop a success.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/GIST-Gangavaram-Testimonial-Logo.jpg?raw=true",
    name: "Dr. U.Penchalaiah",
    designation: "HOD, ECE, GIST, Gangavaram",
  },
];

export const footerMainCarouselData: FooterMainCarouselDataItem[] = [
  {
    id: 1,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/photo_1.jpg?raw=true",
  },
  {
    id: 2,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/photo_2.jpg?raw=true",
  },
  {
    id: 3,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/photo_3.jpg?raw=true",
  },
  {
    id: 4,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/photo_4.jpg?raw=true",
  },
];

export const mouData: MouDataItem[] = [
  {
    id: 1,
    name: "Annamacharya Institute of technology & Sciences, Rajampeta",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Annamacharya-Institute-of-technology-Sciences-Rajampeta.png?raw=true",
  },
  {
    id: 2,
    name: "CMR college of Engineering, Hyderabad",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/CMR_Eng-College-Hyd.jpg?raw=true",
  },
  {
    id: 3,
    name: "Geethanjali Institute of Science and Technology, Nellore",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Geethanjali-Institute-of-Science-and-Technology.jpg?raw=true",
  },
  {
    id: 4,
    name: "SVC, Tirupathi",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/SV-College-Tirupathi.jpg?raw=true",
  },
  {
    id: 5,
    name: "Laki Reddy Bali Reddy College of Engineering, Vijayawada",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Laki-Reddy-Bali-Reddy-Eng-College-Vijayawada.jpg?raw=true",
  },
  {
    id: 6,
    name: "Narayana Engineering college, Nellore",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Narayana-Eng-college-nellore.jpg?raw=true",
  },
  {
    id: 7,
    name: "Rainbow school, Nellore",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Rainbow-school-nellore.jpg?raw=true",
  },
  {
    id: 8,
    name: "Vemu Institute of Technology, Chittoor",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Vemu-Inst-Chittoor.jpg?raw=true",
  },
  {
    id: 8,
    name: "Sreenivasa Institute of Technology and Management Studies",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1742860140/Technotran%20Assets/xtx9etmduqzk4wozg5x8.jpg",
  },
  {
    id: 8,
    name: "Sreenivasa Institute of Technology and Management Studies",
    imgSrc:
      "https://res.cloudinary.com/doxrqtfxo/image/upload/v1742859823/Technotran%20Assets/ulxepghbkzllq7xx7upo.jpg",
  },
];

export const jobOrientedCoursesData: JobOrientedCoursesDataItem[] = [
  {
    id: 1,
    title: "Full Stack Development",
    desc: "Join our Full Stack Development course and master the latest technologies and frameworks used in web development. From front-end languages like HTML, CSS, and JavaScript to back-end technologies like Node.js, Express.js, and MongoDB, our program covers it all. With placement assistance provided, you’ll be ready to pursue exciting career opportunities as a full stack developer.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/full-stack-web-development.jpg?raw=true",
  },
  {
    id: 2,
    title: "Data Science",
    desc: "Explore the fascinating field of data science with our comprehensive course. Learn essential concepts in data analysis, machine learning, and artificial intelligence using Python and popular libraries like Pandas, NumPy, and Scikit-learn. With hands-on projects and real-world applications, you’ll be prepared for lucrative career opportunities in data science.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/data-science.jpg?raw=true",
  },
  {
    id: 3,
    title: "Embedded Systems",
    desc: "Dive into the world of embedded systems and gain expertise in designing and developing embedded hardware and software. Our course covers microcontroller programming, sensor interfacing, embedded Linux, and more. With placement assistance provided, you’ll be ready to pursue rewarding careers in industries like automotive, aerospace, and IoT.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/embedded-systems.png?raw=true",
  },
  {
    id: 4,
    title: "VLSI Design",
    desc: "Explore the field of VLSI (Very Large-Scale Integration) design and learn to design and verify complex integrated circuits (ICs). Our course covers digital design, RTL coding, verification methodologies, and FPGA prototyping. Gain practical experience with industry-standard tools and prepare yourself for a career in VLSI design.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/vlsi-design.png?raw=true",
  },
];

export const industrialSolutionsData: DesignServicesDataItem[] = [
  {
    id: 1,
    title: "Embedded software Development",
    desc: "We specialize in electronic hardware design, prototyping, and development services customized to our clients' needs. Whether you're an expert with detailed specifications or a non-technical customer, we have the expertise to translate your requirements into functional designs. Our services cover the entire spectrum of electronic hardware design, bringing your ideas to life efficiently.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Embedded-system-Design.png?raw=true",
  },
  {
    id: 2,
    title: "IOT (internet of things)",
    desc: "We specialize in IoT development, providing a range of services aimed at creating innovative and interconnected solutions for various industries. Our expertise lies in designing and implementing IoT systems that seamlessly integrate hardware and software components to enable efficient data collection, analysis, and communication between devices. Our comprehensive IoT development program covers everything from sensor selection and integration to cloud platform development and application design. Additionally, we offer specialized training courses focused on IoT development, equipping individuals with the knowledge and skills needed to create cutting-edge IoT solutions. Whether it's building smart home devices, industrial automation systems, or wearable technology, our curriculum ensures a thorough understanding of IoT principles and practices.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/IOT-.png?raw=true",
  },
  {
    id: 3,
    title: "Robotic Kit Manufacturing",
    desc: "We make robotic kits with care and quality. These kits are designed for learning, fun, and with skill development in mind. Whether you're a student, enthusiast, or professional, our kits help you explore the world of robotics. We use the latest technology to ensure our kits are top-notch. From education to industry, our kits are built to meet high standards and make robotics accessible to everyone.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Robotic-kit-Manufacturing.png?raw=true",
  },
  {
    id: 4,
    title: "PCB Design & Fabrication",
    desc: "We specialize in printed circuit board (PCB) design, offering a comprehensive electronics hardware design program that encompasses PCB layout design, prototyping, and assembly. In addition to our core program, we provide specialized training courses tailored specifically to PCB layout design (often abbreviated as PCB design) and prototyping. These standalone courses empower individuals with the skills required to seamlessly convert schematic diagrams into fully assembled prototypes. Our curriculum is thoughtfully designed to cover the complexities of both double-layer and multilayer PCB design, ensuring a comprehensive educational experience.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/pcb-design-fabrication.png?raw=true",
  },
  {
    id: 5,
    title: "3D-Printing",
    desc: "Technotran offers 3D Printing Services, utilizing state-of-the-art technology to bring your ideas to life. Our expertise spans a wide range of industries, from engineering and manufacturing to education. We provide end-to-end solutions, from design and prototyping to the final production of intricate 3D-printed components. With a commitment to precision and innovation, we empower businesses and individuals to turn concepts into reality, advancing the possibilities of 3D printing technology.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/3D-printing-Design.png?raw=true",
  },
  {
    id: 6,
    title: "Android / IOS App development",
    desc: "We offer Android and iOS app development services, delivering a wide range of solutions to turn your mobile app concepts into reality. Our skilled developers excel in both native and cross-platform development, guaranteeing optimal performance, usability, and scalability across all devices. Whether it's a business app or a product-based application, we have the expertise to provide top-notch solutions tailored to your needs. From concept and design to development, testing, and deployment, we collaborate closely with you to ensure your app aligns with your expectations and resonates with your audience.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Android-IOS-App-development.png?raw=true",
  },
  {
    id: 7,
    title: "Website development",
    desc: "We provide website development services, creating solutions to enhance your online presence. Our experienced team ensures your website is visually appealing, user-friendly, and optimized for performance across all devices. Whether you need a simple site, e-commerce platform, or custom web application, we deliver high-quality solutions from design to deployment. With our expertise, we help you stand out online and drive business growth.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/website-development.png?raw=true",
  },
];

export const careersData: CareersDataItem[] = [
  {
    id: 1,
    title: "Robotics Trainer",
    desc: "As a Robotics Trainer at Technotran, you’ll play a key role in delivering hands-on robotics training to students and educators. Join us and inspire the next generation of innovators in the field of robotics.",
  },
  {
    id: 2,
    title: "Technical Associate",
    desc: "Are you passionate about technology and education? As a Technical Associate at Technotran, you’ll play a key role in developing cutting-edge educational products and solutions. Join us and help shape the future of learning.",
  },
  {
    id: 3,
    title: "Design Engineer",
    desc: "As a Design Engineer at Technotran, you’ll be at the forefront of product innovation, working on the design and development of our next-generation educational kits and hardware solutions. Join our team and bring your creativity and technical expertise to the table.",
  },
  {
    id: 4,
    title: "Business Development Executive (BDE)",
    desc: "We’re seeking a proactive and results-driven Business Development Manager to expand our market presence and drive business growth. If you have a knack for building strategic partnerships and achieving sales targets, this role is for you.",
  },
  {
    id: 5,
    title: "Intern",
    desc: "Are you a student or recent graduate looking to gain hands-on experience in the tech industry? Our internship program offers valuable learning opportunities in areas such as product development, marketing, and research. Kickstart your career with Technotran and unleash your potential.",
  },
];

export const schoolRoboticsLabImgsData: SchoolRoboticsLabImgsDataItem[] = [
  {
    id: 1,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/srl-Robotics.png?raw=true",
    title: "Robotics",
  },
  {
    id: 2,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/srl-Artificial-intelligence.png?raw=true",
    title: "Artificial Intelligence",
  },
  {
    id: 3,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/srl-3D-printing-1.png?raw=true",
    title: "3D - Printing",
  },
  {
    id: 4,
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/srl-%2021st-century-skills.png?raw=true",
    title: "21st Century Skills",
  },
];

export const industrialLabSolutions: IndustrialLabSolDataItem[] = [
  {
    id: 1,
    title: "Acid-Cabinets",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Acid-Cabinets.png?raw=true",
  },
  {
    id: 2,
    title: "Analytical Balances",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Analytical%20Balances.png?raw=true",
  },
  {
    id: 3,
    title: "Automatic Co2 Brix Monitor",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Automatic%20Co2%20Brix%20Monitor.png?raw=true",
  },
  {
    id: 4,
    title: "Automatic Plater",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Automatic%20Plater.png?raw=true",
  },
  {
    id: 5,
    title: "Automatic Polarimeter",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Automatic%20Polarimeter.png?raw=true",
  },
  {
    id: 6,
    title: "Automatoc Digital Refractometer",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Automatoc%20digital%20Refractometer.png?raw=true",
  },
  {
    id: 7,
    title: "BOD Incubator",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/BOD%20Incubator.png?raw=true",
  },
  {
    id: 8,
    title: "Big safety cabinet",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Big%20safety%20cabinet.jpeg?raw=true",
  },
  {
    id: 9,
    title: "Chamber Furnace",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Chamber%20Furnace.png?raw=true",
  },
  {
    id: 10,
    title: "Digital Salt-Meter",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Digital%20Salt-Meter.png?raw=true",
  },
  {
    id: 11,
    title: "Digital Visco Meter",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Digital%20Visco%20Meter.png?raw=true",
  },
  {
    id: 12,
    title: "Dispensing Pump for Culture Media Preparation",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Dispensing%20Pump%20for%20Culture%20Media%20Preparation.jpeg?raw=true",
  },
  {
    id: 13,
    title: "Double stage water Distillation Unit",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Double%20stage%20water%20Distillation%20Unit.jpeg?raw=true",
  },
  {
    id: 14,
    title: "Dual Motion Shaker",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Dual%20Motion%20Shaker.jpeg?raw=true",
  },
  {
    id: 15,
    title: "Flourescene Microscope",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Flourescene%20Microscope.png?raw=true",
  },
  {
    id: 16,
    title: "Freeze Dryers",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Freeze%20Dryers.png?raw=true",
  },
  {
    id: 17,
    title: "Gas Generators",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Gas%20Generators.png?raw=true",
  },
  {
    id: 18,
    title: "Heating & Cooling Block",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Heating%20&%20Cooling%20Block.png?raw=true",
  },
  {
    id: 19,
    title: "Hot Plate with magnetic Stirrers",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Hot%20Plate%20with%20magnetic%20Stirrers.png?raw=true",
  },
  {
    id: 20,
    title: "IR Btix Meter",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/IR%20Btix%20Meter.png?raw=true",
  },
  {
    id: 21,
    title: "Inverted microscope",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Inverted%20microscope.jpeg?raw=true",
  },
  {
    id: 22,
    title: "KF Titrators",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/KF%20Titrators.png?raw=true",
  },
  {
    id: 23,
    title: "Laboratory Microscope",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Laboratory%20Microscope.png?raw=true",
  },
  {
    id: 24,
    title: "Laboratory Oven",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Laboratory%20Oven.png?raw=true",
  },
  {
    id: 25,
    title: "Laboratory Refrigerators",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Laboratory%20Refrigerators.png?raw=true",
  },
  {
    id: 26,
    title: "Mass Standards and weight of Classes E0,E1& E2",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Mass%20Standards%20and%20weight%20of%20Classes%20E0,E1&%20E2.png?raw=true",
  },
  {
    id: 27,
    title: "Micro Mixer",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Micro%20Mixer.jpeg?raw=true",
  },
  {
    id: 28,
    title: "Multi Sampler KF Titrators",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Multi%20Sampler%20KF%20Titrators.jpeg?raw=true",
  },
  {
    id: 29,
    title: "Organic sample preparation",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Organic%20sample%20preparation.png?raw=true",
  },
  {
    id: 30,
    title: "PH Cond-TDS PortableTesters Meters",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/PH%20Cond-TDS%20PortableTesters%20Meters.jpeg?raw=true",
  },
  {
    id: 31,
    title: "PH-Cond- TDS handheld Meters",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/PH-Cond-%20TDS%20handheld%20Meters.png?raw=true",
  },
  {
    id: 32,
    title: "PH-Cond-TDS Bench Top",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/PH-Cond-TDS%20Bench%20Top.png?raw=true",
  },
  {
    id: 33,
    title: "PH-EC-Cond Testers",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/PH-EC-Cond%20Testers.png?raw=true",
  },
  {
    id: 34,
    title: "Petri Dish Storage Stack",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Petri%20Dish%20Storage%20Stack.jpeg?raw=true",
  },
  {
    id: 35,
    title: "Precision and commercial standard weights of classes m1,m2,m3",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Precision%20and%20commercial%20standard%20weights%20of%20classes%20m1,m2,m3.png?raw=true",
  },
  {
    id: 36,
    title: "Real-Time Incubator",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Real-Time%20Incubator.png?raw=true",
  },
  {
    id: 37,
    title: "Reasearch Lab Microscope",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Reasearch%20Lab%20Microscope.png?raw=true",
  },
  {
    id: 38,
    title: "Rotator",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Rotator.png?raw=true",
  },
  {
    id: 39,
    title: "Shaking Incubator",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Shaking%20Incubator.jpeg?raw=true",
  },
  {
    id: 40,
    title: "Single Stage Water Distillation Unit",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Single%20Stage%20Water%20Distillation%20Unit.png?raw=true",
  },
  {
    id: 41,
    title: "Temperature & humidity Chambers",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Temperature%20&%20humidity%20Chambers.png?raw=true",
  },
  {
    id: 42,
    title: "Thermal Sealing Unit with waterproof sealing",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Thermal%20Sealing%20Unit%20with%20waterproof%20sealing.jpeg?raw=true",
  },
  {
    id: 43,
    title: "Tube Furnace",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Tube%20Furnace.png?raw=true",
  },
  {
    id: 44,
    title: "Vertical",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Vertical.png?raw=true",
  },
  {
    id: 45,
    title: "Water Chillers",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Water%20Chillers.png?raw=true",
  },
  {
    id: 46,
    title: "Zirconia Sintering",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Zirconia%20Sintering.png?raw=true",
  },
  {
    id: 47,
    title: "Evaporation bath",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/evaporation%20bath.png?raw=true",
  },
  {
    id: 48,
    title: "Laboratory Autoclave",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/laboratory%20Autoclave.png?raw=true",
  },
];

export const eventsData: EventsDataItem[] = [
  {
    id: 1,
    title: "Workshop on PCB Design & Fabrication",
    dates: "20th Aug - 21st Aug ( 2024 )",
    location: "CMR College of Engineering & Technology, Hyderabad.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/VNRVJIET_Workshop-Image.jpg?raw=true",
  },
  {
    id: 2,
    title: "Workshop on Internet of Robotics Things (IoRT)",
    dates: "22nd Aug - 24th Aug ( 2024 )",
    location: "CMR College of Engineering & Technology, Hyderabad.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/IORT-Workshop.jpg?raw=true",
  },
  {
    id: 3,
    title: "Workshop on Electric Vehicle Design",
    dates: "23rd Aug - 24th Aug ( 2024 )",
    location: "Annamacharya University, Rajampet",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Chadalawada-College-workshop-two.jpg?raw=true",
  },
  {
    id: 4,
    title: "Workshop on Electric Vehicle Design",
    dates: "29th Aug - 31st Aug ( 2024 )",
    location: "Vemu Institute of Technology, Chittoor.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Vemu-Auto-bots%20Workshop-two.jpg?raw=true",
  },
  {
    id: 5,
    title: "Workshop on Edge AI",
    dates: "11th Sept - 12th Sept ( 2024 )",
    location: "CMR College of Engineering & Technology, Kandlakoya, Telangana",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Edge-AI-Workshop.jpg?raw=true",
  },
  {
    id: 6,
    title: "Workshop on Auto-bots",
    dates: "27th Sept - 28th Sept ( 2024 )",
    location: "Vemu Institute of Technology, Chittoor.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Vemu_Auto-bots-Workshop-one.jpg?raw=true",
  },
  {
    id: 7,
    title: "Workshop on Auto-bots",
    dates: "23th Sept - 28th Sept ( 2024 )",
    location: "Annamacharya University, Rajampet ",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Annamacharya-University-workshop.jpg?raw=true",
  },
  {
    id: 8,
    title: "Workshop on PCB Design & Fabrication",
    dates: "18th Oct - 19th Oct ( 2024 )",
    location: "Chadalawada Ramanamma Engineering College, Tirupati.",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/Chadalawada-College-workshop-one.jpg?raw=true",
  },
  {
    id: 9,
    title: "Workshop on PCB Design & Fabrication",
    dates: "4th Nov - 7th Nov ( 2024 )",
    location: "VNRVJIET College of Engineering & Technology, Hyderabad",
    imgSrc:
      "https://github.com/CVSCharan/Technotran_Assets/blob/main/VNRVJIET_Workshop.jpg?raw=true",
  },
];
