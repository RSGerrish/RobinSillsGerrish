import toggleContact from './functions.js';

const Contact = () => {
  const contactEle = document.createElement('div');

  const contactX = document.createElement('div');
  contactX.addEventListener("click", toggleContact);

  const contactTitle = document.createElement('div');
  const contactGrid = document.createElement('div');

  const email = document.createElement('a');
  const emailLabel = document.createElement('div');
  const emailContent = document.createElement('div');
  const phonenumber = document.createElement('a');
  const phoneLabel = document.createElement('div');
  const phoneContent = document.createElement('div');
  const socialLabel = document.createElement('div');
  const socialList = document.createElement('ul');
  const socialLink1 = document.createElement('a');
  const socialLink2 = document.createElement('a');
  const socialItem1 = document.createElement('li');
  const socialItem2 = document.createElement('li');

  contactEle.id = "contact-container";
  contactEle.style.visibility = "hidden";

  contactX.id = "contact-x";
  contactX.textContent = "X";

  contactTitle.id = "contact-title";
  contactTitle.textContent = "Contact";
  contactGrid.id = "contact-grid";

  email.href = "mailto:robin@robinsillsgerrish.com";
  email.textContent = "robin@robinsillsgerrish.com";

  emailLabel.className = "contact-label";
  emailLabel.textContent = "Email:";
  emailContent.className = "contact-content";
  emailContent.appendChild(email);

  phonenumber.href = "tel:16104136063";
  phonenumber.textContent = "(610) 413-6063";

  phoneLabel.className = "contact-label";
  phoneLabel.textContent = "Phone:";
  phoneContent.className = "contact-content";
  phoneContent.appendChild(phonenumber);

  socialLink1.href = "https://github.com/RSGerrish";
  socialLink1.textContent = "Github";
  socialLink2.href = "https://linkedin.com/in/robingerrish";
  socialLink2.textContent = "LinkedIn";

  socialLabel.className = "contact-label";
  socialLabel.textContent = "Socials:";
  socialList.id = "social-list";
  socialItem1.className = "social-item";
  socialItem1.appendChild(socialLink1);
  socialItem2.className = "social-item";
  socialItem2.appendChild(socialLink2);
  socialList.append(socialItem1, socialItem2);

  contactGrid.append(emailLabel, emailContent, phoneLabel, phoneContent, socialLabel, socialList);

  contactEle.append(contactX, contactTitle, contactGrid);

  return contactEle;
}

export default Contact;