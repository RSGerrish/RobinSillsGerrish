export default function toggleContact () {
  const contactEle = document.querySelector('#contact-container');

  if(contactEle) {
    if(contactEle.style.visibility === "visible") {
      contactEle.style.visibility = "hidden";
    } else {
      contactEle.style.visibility = "visible";
    }
  }
};