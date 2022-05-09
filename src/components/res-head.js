const ResumeHead = (name, email, phone, github, linkedin) => {
  const resheadEle = document.createElement('div');
  const nameEle = document.createElement('div');
  const infoContainer = document.createElement('div');
  const emailEle = document.createElement('div');
  const phoneEle = document.createElement('div');
  const githubEle = document.createElement('div');
  const linkedinEle = document.createElement('div');

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

  infoContainer.append(emailEle, phoneEle, githubEle, linkedinEle);
  resheadEle.append(nameEle, infoContainer);

  return resheadEle;
}

export default ResumeHead;