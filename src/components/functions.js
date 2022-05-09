import Portfolio from './portfolio.js';
import Resume from './resume.js';

let sizeState = 10;

export default function toggleContact () {
  const contactEle = document.querySelector('#contact-container');

  if(contactEle) {
    if(contactEle.style.visibility === "visible") {
      contactEle.style.visibility = "hidden";
    } else {
      contactEle.style.visibility = "visible";
    }
  }
};

export function showPortfolio () {
  const resume = document.querySelector('#resume-body');
  const header = document.querySelector('header');
  const headerLogo = document.querySelector('#header-logo');

  if (resume) {
    resume.remove();
    headerLogo.style.visibility = "visible";
    header.after(Portfolio());
  };
}

export function showResume () {
  const portfolio = document.querySelector('#portfolio-body');
  const header = document.querySelector('header');
  const headerLogo = document.querySelector('#header-logo');

  if (portfolio) {
    portfolio.remove();
    headerLogo.style.visibility = "hidden";
    header.after(Resume());
  }
}

export function resizeEventListener() {
  if (window.innerWidth < 1155 && sizeState != 9) {
    const resumeBody = document.querySelector('#resume-body');
    const infoElement = document.querySelectorAll('.info-element');

    resumeBody.style.padding = "0";
  } else {
    const resumeBody = document.querySelector('#resume-body');
    const infoElement = document.querySelectorAll('.info-element');

    resumeBody.style.padding = "2rem";
  }
  
  if (window.innerWidth < 720 && sizeState != 3) {
    const skillsWrapper = document.querySelector('#skills-wrapper');
    const nodeList = document.querySelectorAll('#skills-wrapper>div');
    const infoContainer = document.querySelector('#info-container');
    const btnList = document.querySelectorAll('.nav-button');

    nodeList[5].remove();
    nodeList[11].remove();
    skillsWrapper.style.gridTemplate = "1fr 1fr 1fr / 1fr 1fr 1fr 1fr 1fr"
    infoContainer.style.gridTemplate = "1fr 1fr 1fr 1fr / 1fr";
    btnList.forEach(btn => btn.style.fontSize = "1.1rem")
  } else if (window.innerWidth >= 720 && sizeState === 3) {
    const skillsWrapper = document.querySelector('#skills-wrapper');

    const skill3 = document.querySelector('#skill-3');
    const skill6 = document.querySelector('#skill-6')
    const bullet1 = document.createElement('div');
    const bullet2 = document.createElement('div');

    const infoContainer = document.querySelector('#info-container');

    bullet1.textContent = "•";
    bullet2.textContent = "•";

    skillsWrapper.insertBefore(bullet1, skill3);
    skillsWrapper.insertBefore(bullet2, skill6);

    skillsWrapper.style.gridTemplate = "1fr / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
    infoContainer.style.gridTemplate = "1fr 1fr / 1fr 1fr";
  }

  //Handle sizeState once per resize
  if (window.innerWidth > 1165) {
    sizeState = 10;
  } else if (window.innerWidth < 1165 && window.innerWidth >= 720) {
    sizeState = 7;
  } else if (window.innerWidth < 720) {
    sizeState = 3;
  }
}