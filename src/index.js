import './styles/style.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Resume from './components/resume.js';
import Contacts from './components/contacts.js';
import Lander from './components/lander.js';
import Portfolio from './components/portfolio.js';
import AboutMe from './components/aboutme.js';
import AboutAnchorSpace from './components/aboutanchorspace.js';
import ResAnchorSpace from './components/resanchorspace.js';
import PortAnchorSpace from './components/portanchorspace.js';
import TopAnchorSpace from './components/topanchorspace.js';
import ContactAnchorSpace from './components/contactanchorspace.js';

function component() {
  const element = document.createElement('div');

  element.id = 'site-container';

  element.append(Header(), TopAnchorSpace(), Lander(), AboutAnchorSpace(), AboutMe(), ResAnchorSpace(), Resume(), PortAnchorSpace(), Portfolio(), ContactAnchorSpace(), Contacts(), Footer());

  return element;
}


function handleScroll() {
  const landerBody = document.querySelector("#lander-body");
  const aboutmeBody = document.querySelector("#aboutme-body");
  const header = document.querySelector("header");

  if (landerBody.getBoundingClientRect().top < - 70) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
  
  if (aboutmeBody.getBoundingClientRect().top < 140) {
    aboutmeBody.classList.add("aboutme-scroll");
  } else {
    aboutmeBody.classList.remove("aboutme-scroll");
  }
}

document.body.appendChild(component());

window.addEventListener("scroll", handleScroll);
