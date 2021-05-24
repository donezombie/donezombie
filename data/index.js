import {
  FiGithub,
  FiInstagram,
  FiCodepen,
  FiFacebook,
  FiUser,
  FiFileText,
  FiGitlab,
} from "react-icons/fi";
import { SiJavascript, SiReact, SiSass, SiHtml5 } from "react-icons/si";

export default {
  fullName: "Phạm Phú Quý Đôn",
  position: "Front-end developer",
  descriptionPosition:
    `I'm a software engineer specialised in frontend development for complex scalable web apps. My objective is to become a professional software engineer.
    I always try my best to learn new programming languages and develop new ideas to create quality products.`,
  avatar: "/static/assets/avatar.jpeg",
  imgAboutMe: "/static/assets/avatar.jpeg",
  description: `Hi, my name is Đôn <br /> I have more 3 years experience. Welcome to my personal website!`,
  descriptionWhatIDo: `I have more than 3 years' experience building web-app for
  clients all over the world. Below is a quick overview of my main
  technical skill sets and technologies I use. Want to find out more
  about my experience? Check out my online resume and project
  portfolio.`,
  listSocial: [
    {
      name: "Facebook",
      path: "https://fb.com/donezombiee",
      icon: <FiFacebook />,
    },
    {
      name: "Instagram",
      path: "https://instagram.com/donezombie",
      icon: <FiInstagram />,
    },
    {
      name: "Github",
      path: "https://github.com/donezombie",
      icon: <FiGithub />,
    },
    {
      name: "Codesandbox",
      path: "https://codesandbox.io/u/donezombie",
      icon: <FiCodepen />,
    },
  ],

  listNavProfile: [
    {
      name: "About me",
      icon: <FiUser />,
      href: "/",
    },
    {
      name: "Portfolio",
      icon: <FiGitlab />,
      href: "/project",
    },
    {
      name: "Resume",
      icon: <FiFileText />,
      href: "/resume",
    },
  ],

  listTechnique: [
    {
      name: "React JS",
      icon: <SiReact />,
      className: "react-icon",
    },
    {
      name: "Vanilla Javascript",
      icon: <SiJavascript />,
      className: "js-icon",
    },
    {
      name: "HTML & CSS",
      icon: <SiHtml5 />,
      className: "html-icon",
    },
    {
      name: "Sass",
      icon: <SiSass />,
      className: "sass-icon",
    },
  ],

  listPortfolio: [
    {
      id: 1,
      name: "MindX FAQ",
      url: "https://faq.mindx.edu.vn",
      img:
        "https://static.ybox.vn/2019/4/4/1554360353213-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn.png",
      describe:
        "Provide Frequently Asked Question and Answer about curriculum, learning environment and technical issues at MindX",
    },
    {
      id: 2,
      name: "MindX Instructor Check in App (Mobile)",
      url: "https://google.com",
      img:
        "https://static.ybox.vn/2019/4/4/1554360353213-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn.png",
      describe:
        " Play as a digital receptionist to check instructors in.<br /> Provide data for teacher's monthly salary report.",
    },
    {
      id: 3,
      name: "Techkids Learning Management System",
      url: "https://apps.techkids.vn/",
      img:
        "https://static.ybox.vn/2017/4/24/c6775350-28f3-11e7-a2b4-56c566ee3692.png",
      describe:
        "Provide online content for students inside and outside classroom<br /> Quality control<br /> Class management<br /> ID management<br /> Learning resource management<br /> Facilitate teaching activity",
    },
    {
      id: 4,
      name: "Eurofins",
      url: "https://www.eurofins.vn/",
      img: "https://cdnmedia.eurofins.com/apac/media/304905/logo.png",
      describe:
        "They're the global market leader in environmental, food, pharmaceuticals and cosmetics testing as well as in agro-sciences CRO (Contract Research Organisation) services.",
    },
    {
      id: 5,
      name: "Wisr Credit",
      url: "https://wisrcredit.com.au/",
      img:
        "https://australianfintech.com.au/wp-content/uploads/sites/7/2018/03/wisr2-1.jpg",
      describe:
        "WisrCredit will let you know your score can change over time so youʼll be able to see how the changes occur in relation to your behaviours over time",
    },
    {
      id: 6,
      name: "Vietnam Powerlifting Federation",
      url: "https://vpf.now.sh/",
      img: "https://vpf.now.sh/static/assets/LogoVPF.jpg",
      describe: "Vietnam's Drug-Free Powerlifting Community",
    },
    {
      id: 7,
      name: "Textback AI",
      url: "https://dashboard.textback.ai/",
      img: "/static/assets/logo.png",
      describe: "Auto SMS - Ads for marketing",
    },
    {
      id: 8,
      name: "Amarket (Private)",
      url: "https://www.google.com.vn/search?q=cho+hai+san+dai+duong+ha+long",
      img:
        "https://lh5.googleusercontent.com/p/AF1QipO4iAW7bNfBX29b9FBgoqcCfPYclhaBrV6EoQTw=w428-h320-k-no",
      describe: "Admin - products management",
    },
    {
      id: 9,
      name: "Crown X - CMS (Winmart)",
      url: "https://crownx.winmart.vn",
      img: "/static/assets/logo_crownx.png",
      describe: "Retail supermarket chain Winmart"
    }
  ],
};
