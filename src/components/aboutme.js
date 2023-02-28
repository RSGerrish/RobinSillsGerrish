import '../styles/style.css';
import '../styles/aboutme.css';
import AboutImage from '../assets/portrait-bw.webp';
import iconJavascript from '../assets/javascript.svg';
import iconCSS from '../assets/css3.svg';
import iconHTML from '../assets/html5.svg';
import iconReact from '../assets/react.svg';
import iconNode from '../assets/nodedotjs.svg';
import iconExpress from '../assets/express.svg';
import iconPHP from '../assets/php.svg';
import iconMySQL from '../assets/mysql.svg';
import iconWebpack from '../assets/webpack.svg';
import iconGit from '../assets/git.svg';
import iconNPM from '../assets/npm.svg';
import iconJest from '../assets/jest.svg';

const AboutMe = () => {
  const aboutEle = document.createElement('div');

  const bioContainer = document.createElement('div');
  const bioWrapper = document.createElement('div');
  const techContainer = document.createElement('div');

  const bioImage = document.createElement('img');
  const bioImageBorder = document.createElement('div');
  const bioAbout1 = document.createElement('div');
  const bioAbout2 = document.createElement('div');

  const techStack = [
    {
      tName: "Javascript",
      tIcon: iconJavascript,
      filter: "invert(98%) sepia(91%) saturate(5157%) hue-rotate(338deg) brightness(101%) contrast(95%)",
    },
    {
      tName: "CSS",
      tIcon: iconCSS,
      filter: "invert(31%) sepia(100%) saturate(996%) hue-rotate(179deg) brightness(91%) contrast(86%)",
    },
    {
      tName: "HTML",
      tIcon: iconHTML,
      filter: "invert(39%) sepia(75%) saturate(3306%) hue-rotate(349deg) brightness(94%) contrast(89%)",
    },
    {
      tName: "React",
      tIcon: iconReact,
      filter: "invert(75%) sepia(57%) saturate(631%) hue-rotate(160deg) brightness(100%) contrast(97%)",
    },
    {
      tName: "Node.js",
      tIcon: iconNode,
      filter: "invert(50%) sepia(43%) saturate(770%) hue-rotate(71deg) brightness(89%) contrast(87%)",
    },
    {
      tName: "Express",
      tIcon: iconExpress,
      filter: "invert(0%) sepia(98%) saturate(9%) hue-rotate(152deg) brightness(94%) contrast(102%)",
    },
    {
      tName: "PHP",
      tIcon: iconPHP,
      filter: "invert(52%) sepia(6%) saturate(2739%) hue-rotate(198deg) brightness(93%) contrast(85%)",
    },
    {
      tName: "MySQL",
      tIcon: iconMySQL,
      filter: "invert(47%) sepia(18%) saturate(1295%) hue-rotate(163deg) brightness(89%) contrast(84%)",
    },
    {
      tName: "Webpack",
      tIcon: iconWebpack,
      filter: "invert(76%) sepia(13%) saturate(1124%) hue-rotate(161deg) brightness(103%) contrast(95%)",
    },
    {
      tName: "Git",
      tIcon: iconGit,
      filter: "invert(51%) sepia(66%) saturate(3826%) hue-rotate(337deg) brightness(92%) contrast(106%)",
    },
    {
      tName: "npm",
      tIcon: iconNPM,
      filter: "invert(40%) sepia(63%) saturate(6569%) hue-rotate(346deg) brightness(88%) contrast(78%)",
    },
    {
      tName: "Jest",
      tIcon: iconJest,
      filter: "invert(17%) sepia(54%) saturate(3801%) hue-rotate(339deg) brightness(101%) contrast(106%)",
    }
  ]

  aboutEle.id = "aboutme-body";

  bioContainer.id = "bio-container";
  bioWrapper.id = "bio-wrapper";
  techContainer.id = "tech-container";

  bioImage.src = AboutImage;
  bioImage.id = "bio-image";
  bioImageBorder.id = "bio-image-border";

  bioImageBorder.appendChild(bioImage);

  bioAbout1.textContent = "Since discovering VB3 at the age of 14, I have since always enjoyed programming and simply getting things to work. While I ultimately took a different route for my career path up to this point, I've realized that my heart truly lies in programming and development. Through working on various passion projects over the years, I have developed a bit of experience using languages like C#, PHP and SQL. Over recent years, I've directed my focus to Full Stack Web Development focusing in React and the MERN stack.";
  bioAbout1.id = "bio-about1";
  bioAbout1.className = "bio-about";

  bioAbout2.textContent = "My high adaptability, drive to learn, and passion for coding are all traits that will contribute to my success as a software engineer. Please be sure to check out my portfolio below!";
  bioAbout2.id = "bio-about2";
  bioAbout2.className = "bio-about";

  bioWrapper.append(bioImageBorder, bioAbout1, bioAbout2);

  bioContainer.appendChild(bioWrapper);

  techContainer.id = "tech-container";

  techStack.forEach ((tech) => {
    const techCard = document.createElement('div');
    const techIcon = document.createElement('img');
    const techName = document.createElement('div');

    techCard.className = "tech-card";
    techIcon.className = "tech-icon";
    techName.className = "tech-name";

    techIcon.src = tech.tIcon;
    techIcon.alt = "";
    techIcon.style.filter = tech.filter;
    techName.textContent = tech.tName;

    techCard.append(techIcon, techName);

    techContainer.appendChild(techCard);
  })
  
  aboutEle.append(bioContainer, techContainer);

  return aboutEle;
}

export default AboutMe;