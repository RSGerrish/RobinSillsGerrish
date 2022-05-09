const ResumeHead = (name, email, phone, github, linkedin) => {
  const resheadEle = document.createElement('div');
  const nameEle = document.createElement('div');
  const infoContainer = document.createElement('div');

  const emailEle = document.createElement('div');
  const phoneEle = document.createElement('div');
  const githubEle = document.createElement('div');
  const linkedinEle = document.createElement('div');

  const emailLink = document.createElement('a');
  const phoneLink = document.createElement('a');
  const githubLink = document.createElement('a');
  const linkedinLink = document.createElement('a');

  emailLink.className = "res-link";
  emailLink.href = "mailto:robin@RobinSillsGerrish.com"
  phoneLink.className = "res-link";
  phoneLink.href = "tel:16104136063";
  githubLink.className = "res-link";
  githubLink.href = "https://github.com/RSGerrish";
  linkedinLink.className = "res-link";
  linkedinLink.href = "https://linkedin.com/in/robingerrish";

  resheadEle.id = 'head-container';
  nameEle.id = 'user-name';
  infoContainer.id = 'info-container';
  emailEle.className = 'info-element';
  phoneEle.className = 'info-element';
  githubEle.className = 'info-element';
  linkedinEle.className = 'info-element';

  nameEle.textContent = name;
  emailEle.textContent = email;
  phoneEle.textContent = phone;
  githubEle.textContent = github;
  linkedinEle.textContent = linkedin;

  emailLink.appendChild(emailEle);
  phoneLink.appendChild(phoneEle);
  githubLink.appendChild(githubEle);
  linkedinLink.appendChild(linkedinEle);

  infoContainer.append(emailLink, phoneLink, githubLink, linkedinLink);
  resheadEle.append(nameEle, infoContainer);

  return resheadEle;
}

export default ResumeHead;