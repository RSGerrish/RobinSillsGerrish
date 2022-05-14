import iconGit from '../assets/github.svg';
import iconLinkedIn from '../assets/linkedin.svg';

const Contacts = () => {
  const contactEle = document.createElement('div');

  contactEle.id = "contact-body";

  const contactTitle = document.createElement('div');
  const contactWrapper = document.createElement('div');
  
  contactTitle.textContent = "Contact";
  contactTitle.id = "contact-title";
  contactWrapper.id = "contact-wrapper";

  const directContainer = document.createElement('div');
  const socialContainer = document.createElement('div');

  directContainer.id = "direct-container";
  directContainer.className = "contact-container";
  socialContainer.id = "social-container";
  socialContainer.className = "contact-container";

  const directTitle = document.createElement('div');
  const directGrid = document.createElement('div');

  directTitle.textContent = "DIRECT";
  directTitle.id = "direct-title";
  directTitle.className = "section-title";
  directGrid.id = "direct-grid";
  directGrid.className = "contact-grid";

  const directELabel = document.createElement('div');
  const directELink = document.createElement('a');
  const directEmail = document.createElement('div');
  const directPLabel = document.createElement('div');
  const directPLink = document.createElement('a');
  const directPhone = document.createElement('div');

  directELabel.textContent = "Email:";
  directELabel.id = "direct-elabel";
  directELabel.className = "direct-label";
  directELink.href = "mailto:robin@robinsillsgerrish.com";
  directELink.id = "direct-elink";
  directEmail.textContent = "robin@robinsillsgerrish.com";
  directEmail.id = "direct-email";

  directELink.appendChild(directEmail);
  
  directPLabel.textContent = "Phone:";
  directPLabel.id = "direct-plabel";
  directPLabel.className = "direct-label";
  directPLink.href = "tel:(610)413-6063";
  directPLink.id = "direct-plink";
  directPhone.textContent = "(610) 413-6063";
  directPhone.id = "direct-phone";

  directPLink.appendChild(directPhone);

  directGrid.append(directELabel, directELink, directPLabel, directPLink);

  directContainer.append(directTitle, directGrid);

  const socialTitle = document.createElement('div');
  const socialGrid = document.createElement('div');

  socialTitle.textContent = "SOCIALS";
  socialTitle.id = "social-title";
  socialTitle.className = "section-title";
  socialGrid.id = "social-grid";
  socialGrid.className = "contact-grid";

  const socialGHLink = document.createElement('a');
  const socialGHImg = document.createElement('img');
  const socialGHLabel = document.createElement('a');
  const socialLILink = document.createElement('a');
  const socialLIImg = document.createElement('img');
  const socialLILabel = document.createElement('a');

  socialGHLink.href = "https://github.com/RSGerrish";
  socialGHLink.target = "_blank";
  socialGHLink.id = "social-ghlink";
  socialGHLink.className = "social-link";
  socialGHImg.src = iconGit;
  socialGHImg.id = "social-ghimg";
  socialGHImg.className = "social-img";
  socialGHLabel.textContent = "GitHub";
  socialGHLabel.id = "social-ghlabel";
  socialGHLabel.className = "social-label";
  socialGHLabel.href = "https://github.com/RSGerrish";
  socialGHLabel.target = "_blank";

  socialGHLink.appendChild(socialGHImg);

  socialLILink.href = "https://linkedin.com/in/robingerrish";
  socialLILink.target = "_blank";
  socialLILink.id = "social-lilink";
  socialLILink.className = "social-link";
  socialLIImg.src = iconLinkedIn;
  socialLIImg.id = "social-liimg";
  socialLIImg.className = "social-img";
  socialLILabel.textContent = "LinkedIn";
  socialLILabel.id = "social-lilabel";
  socialLILabel.className = "social-label";
  socialLILabel.href = "https://linkedin.com/in/robingerrish";
  socialLILabel.target = "_blank";

  socialLILink.appendChild(socialLIImg);

  socialGrid.append(socialGHLink, socialGHLabel, socialLILink, socialLILabel);

  socialContainer.append(socialTitle, socialGrid);

  contactWrapper.append(directContainer, socialContainer);

  contactEle.append(contactTitle, contactWrapper);

  return contactEle;
}

export default Contacts;