import './styles/style.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Resume from './components/resume.js';
import Contacts from './components/contacts.js';
import Lander from './components/lander.js';
import Portfolio from './components/portfolio.js';
import ResAnchorSpace from './components/resanchorspace.js';
import PortAnchorSpace from './components/portanchorspace.js';
import TopAnchorSpace from './components/topanchorspace.js';
import ContactAnchorSpace from './components/contactanchorspace.js';

function component() {
  const element = document.createElement('div');

  element.id = 'site-container';

  element.append(Header(), TopAnchorSpace(), Lander(), ResAnchorSpace(), Resume(), PortAnchorSpace(), Portfolio(), ContactAnchorSpace(), Contacts(), Footer());

  return element;
}


function handleScroll() {
  const landerBody = document.querySelector("#lander-body");
  const header = document.querySelector("header");
  const landerEle = document.querySelectorAll("name-ele");
  const windowHeight = window.innerHeight;

  if (landerBody.getBoundingClientRect().top < - 70) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  landerEle.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      // element.classList.add("active");
    } else {
      // element.classList.remove("active");
    }
  })
}

document.body.appendChild(component());

window.addEventListener("scroll", handleScroll);
