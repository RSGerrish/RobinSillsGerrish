import toggleContact, { showPortfolio, showResume, resizeEventListener } from './functions.js';

const Header = () => {
  const headerEle = document.createElement('header');

  const headerWrapper = document.createElement('div');
  const logoContainer = document.createElement('div');
  const msgContainer = document.createElement('div');
  const navContainer = document.createElement('div');

  const headerLogo = document.createElement('div');
  const headerMsg = document.createElement('div');

  const btnContact = document.createElement('button');
  const btnPortfolio = document.createElement('button');

  //Put a resize event listener on the window
  window.addEventListener("resize", resizeEventListener);

  headerWrapper.id = "header-wrapper";

  logoContainer.id = "logo-container";
  msgContainer.id = "msg-container";
  navContainer.id = "nav-container";

  headerLogo.textContent = "RSG.com"
  headerLogo.id = "header-logo";
  headerLogo.addEventListener("click", showResume);

  logoContainer.appendChild(headerLogo);

  headerMsg.id = "header-msg";
  
  msgContainer.appendChild(headerMsg);
  
  btnContact.className = "nav-button";
  btnContact.textContent = "Contact";
  btnContact.addEventListener("click", toggleContact);
  btnPortfolio.className = "nav-button";
  btnPortfolio.textContent = "Portfolio";
  btnPortfolio.addEventListener("click", showPortfolio)

  navContainer.append(btnContact, btnPortfolio)

  headerWrapper.append(logoContainer, msgContainer, navContainer);

  headerEle.appendChild(headerWrapper);

  return headerEle;
}

export default Header;