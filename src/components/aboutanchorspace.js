const AboutAnchorSpace = () => {
  const anchorEle = document.createElement('div');
  const anchorSpace = document.createElement('div');
  const aboutAnchor = document.createElement('a');
  
  anchorSpace.className = "anchor";
  aboutAnchor.href = "#about"
  aboutAnchor.id = "about";

  anchorEle.id = "about-anchor";

  anchorEle.append(aboutAnchor, anchorSpace);

  return anchorEle;
}

export default AboutAnchorSpace;