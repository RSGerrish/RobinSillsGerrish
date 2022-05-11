import './style.css';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Resume from './components/resume.js';
import Contact from './components/contact.js';
import { initialLoad } from './components/functions.js';

function component() {
  const element = document.createElement('div');

  element.id = 'site-container';

  element.append(Contact(), Header(), Resume(), Footer());

  return element;
}

document.body.appendChild(component());