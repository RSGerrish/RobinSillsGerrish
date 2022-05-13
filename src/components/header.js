import toggleContact, { showPortfolio, showResume, resizeEventListener } from './functions.js';

const Header = () => {
  const headerEle = document.createElement('header');

  const headerWrapper = document.createElement('div');
  const logoContainer = document.createElement('div');
  const msgContainer = document.createElement('div');
  const navContainer = document.createElement('div');

  const linkLogo = document.createElement('a');
  const headerLogo = document.createElement('div');
  const headerMsg = document.createElement('div');

  const btnContact = document.createElement('div');
  const linkPortfolio = document.createElement('a');
  const btnPortfolio = document.createElement('div');

  headerWrapper.id = "header-wrapper";

  logoContainer.id = "logo-container";
  msgContainer.id = "msg-container";
  navContainer.id = "nav-container";

  linkLogo.href = "#top";
  headerLogo.textContent = "RSG.com"
  headerLogo.id = "header-logo";

  linkLogo.appendChild(headerLogo);
  logoContainer.appendChild(linkLogo);

  headerMsg.id = "header-msg";
  
  msgContainer.appendChild(headerMsg);
  
  btnContact.className = "nav-button";
  btnContact.textContent = "Contact";
  btnContact.addEventListener("click", toggleContact);

  linkPortfolio.href = "#portfolio";
  linkPortfolio.id = "link-portfolio";
  btnPortfolio.className = "nav-button";
  btnPortfolio.textContent = "Portfolio";
  linkPortfolio.appendChild(btnPortfolio);

  navContainer.append(btnContact, linkPortfolio)

  headerWrapper.append(logoContainer, msgContainer, navContainer);

  headerEle.appendChild(headerWrapper);

  return headerEle;
}

export default Header;