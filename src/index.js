import './style.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Resume from './components/resume.js';
import Contact from './components/contact.js';
import Lander from './components/lander.js';
import ResAnchorSpace from './components/resanchorspace.js';

function component() {
  const element = document.createElement('div');

  element.id = 'site-container';

  element.append(Contact(), Header(), Lander(), ResAnchorSpace(), Resume(), Footer());

  return element;
}


function handleScroll() {
  const landerBody = document.querySelector("#lander-body");
  const header = document.querySelector("header");
  const landerEle = document.querySelectorAll("name-ele");
  const windowHeight = window.innerHeight;

  console.log(landerBody.getBoundingClientRect().top);

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
