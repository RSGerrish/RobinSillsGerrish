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

  nameWrapper.id = "name-wrapper";

  nameWrapper.append(fNameContain, mNameContain, lNameContain);

  const aboutTitle = document.createElement('div');
  const aboutText = document.createElement('div');
  const aboutBD = document.createElement('div');

  aboutTitle.id = "about-title";
  aboutTitle.textContent = "Composite Engineer and Lifelong Programmer"

  aboutText.id = "about-text";
  aboutText.textContent = "Looking To Take His Skills To An Entry Level Front End Development Position";

  aboutBD.id = "about-bd";

  const linkSeeMore = document.createElement('a');
  const btnTextRead = document.createElement('div');
  const btnTextMore = document.createElement('div');
  const btnSeeMore = document.createElement('img');
  const shapeHoriz = document.createElement('div');
  const shapeVert = document.createElement('div');

  linkSeeMore.href = "#about";
  linkSeeMore.id = "see-more";

  btnTextRead.textContent = "READ";
  btnTextRead.id = "btn-text-read";
  btnTextRead.className = "btn-text";

  btnTextMore.textContent = "MORE";
  btnTextMore.id = "btn-text-more";
  btnTextMore.className = "btn-text";

  btnSeeMore.src = DownArrow;
  btnSeeMore.title = "Read more about me below";
  btnSeeMore.id = "btn-see-more";

  shapeHoriz.id = "shape-horizontal";
  shapeVert.id = "shape-vertical";

  linkSeeMore.append(btnTextRead, btnSeeMore, btnTextMore);

  landerEle.id = "lander-body";
  landerEle.append (nameWrapper, aboutTitle, aboutText, aboutBD, linkSeeMore, shapeHoriz, shapeVert);

  return landerEle;
}

export default Lander;