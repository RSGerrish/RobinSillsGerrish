import Portfolio from './portfolio.js';

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

  resume.remove();

  header.after(Portfolio());
}