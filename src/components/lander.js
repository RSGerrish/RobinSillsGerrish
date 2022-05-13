import DownArrow from '../assets/arrow-down-bold-circle-outline.svg'
const Lander = () => {
  const landerEle = document.createElement('div');
  const nameWrapper = document.createElement('div');

  const fNameContain = document.createElement('div');
  const mNameContain = document.createElement('div');
  const lNameContain = document.createElement('div');

  fNameContain.id = "fname-contain";
  fNameContain.className = "name-container";

  mNameContain.id = "mname-contain";
  mNameContain.className = "name-container";

  lNameContain.id = "lname-contain";
  lNameContain.className = "name-container";

  const fName = document.createElement('div');
  const mName = document.createElement('div');
  const lName = document.createElement('div');

  fName.textContent = "Robin";
  fName.id = "first-name";
  fName.className = "name-ele";
  fNameContain.appendChild(fName);

  mName.textContent = "Sills";
  mName.id = "middle-name";
  mName.className = "name-ele";
  mNameContain.appendChild(mName);

  lName.textContent = "Gerrish";
  lName.id = "last-name";
  lName.className = "name-ele";
  lNameContain.appendChild(lName);

  const nameBD1 = document.createElement('div');
  const nameBD2 = document.createElement('div');
  const nameBD3 = document.createElement('div');

  nameBD1.id = "name-bd1";
  nameBD1.className = "back-drop";
  nameBD1.textContent = "Hello!";

  nameBD2.id = "name-bd2";
  nameBD2.className = "back-drop";
  nameBD2.textContent = "My name"

  nameBD3.id = "name-bd3";
  nameBD3.className = "back-drop";
  nameBD3.textContent = "is...";

  nameWrapper.id = "name-wrapper";

  nameWrapper.append(fNameContain, mNameContain, lNameContain, nameBD1, nameBD2, nameBD3);

  const aboutTitle = document.createElement('div');
  const aboutText = document.createElement('div');
  const aboutBD = document.createElement('div');

  aboutTitle.id = "about-title";
  aboutTitle.textContent = "Composite Engineer and Lifelong Programmer"

  aboutText.id = "about-text";
  aboutText.textContent = "Looking To Take His Skills To An Entry Level Front End Development Position";

  aboutBD.id = "about-bd";

  const linkSeeMore = document.createElement('a');
  const btnSeeMore = document.createElement('img');

  linkSeeMore.href = "#resume";
  linkSeeMore.id = "see-more";

  btnSeeMore.src = DownArrow;
  btnSeeMore.title = "Read more about me below";
  btnSeeMore.id = "btn-see-more";

  linkSeeMore.appendChild(btnSeeMore);

  landerEle.id = "lander-body";
  landerEle.append (nameWrapper, aboutTitle, aboutText, aboutBD, linkSeeMore);

  return landerEle;
}

export default Lander;