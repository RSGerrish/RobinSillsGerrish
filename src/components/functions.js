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
/*
Below function handles the responsiveness of the site in relation to the current
viewport width. Currently only handles the resume page. I will be back to give the
Portfolio page some love. This function should really be broken down into smaller 
bits for readability.
*/
export function resizeEventListener() {

  if (window.innerWidth < 720 && sizeState != 3) {
    const nodeList = document.querySelectorAll('#skills-wrapper>div');

    nodeList[5].remove();
    nodeList[11].remove();
  } else if (window.innerWidth >= 720 && sizeState === 3) {
    const skillsWrapper = document.querySelector('#skills-wrapper');
    const skill3 = document.querySelector('#skill-3');
    const skill6 = document.querySelector('#skill-6');
    const bullet1 = document.createElement('div');
    const bullet2 = document.createElement('div');

    bullet1.textContent = "•";
    bullet2.textContent = "•";

    skillsWrapper.insertBefore(bullet1, skill3);
    skillsWrapper.insertBefore(bullet2, skill6);
  }

  //Handle sizeState once per resize
  setSizeState();
}

export function initialLoad() {
  //Set other various layout options for smaller viewport widths
  if (window.innerWidth < 720) {
    const nodeList = document.querySelectorAll('#skills-wrapper>div');

    nodeList[5].remove();
    nodeList[11].remove();
  } else if (window.innerWidth >= 720 && window.innerWidth < 1155) {
    const skillsWrapper = document.querySelector('#skills-wrapper');
    const skill3 = document.querySelector('#skill-3');
    const skill6 = document.querySelector('#skill-6');
    const bullet1 = document.createElement('div');
    const bullet2 = document.createElement('div');

    bullet1.textContent = "•";
    bullet2.textContent = "•";

    skillsWrapper.insertBefore(bullet1, skill3);
    skillsWrapper.insertBefore(bullet2, skill6);
  }
}

function setSizeState() {
  if (window.innerWidth > 1165) {
    sizeState = 10;
  } else if (window.innerWidth < 1165 && window.innerWidth >= 720) {
    sizeState = 7;
  } else if (window.innerWidth < 720) {
    sizeState = 3;
  }
}