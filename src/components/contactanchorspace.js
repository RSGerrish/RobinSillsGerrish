const contactAnchorSpace = () => {
  const anchorEle = document.createElement('div');
  const anchorSpace = document.createElement('div');
  const contactAnchor = document.createElement('a');
  
  anchorSpace.className = "anchor";
  contactAnchor.href = "#contact"
  contactAnchor.id = "contact";

  anchorEle.id = "contact-anchor";

  anchorEle.append(contactAnchor, anchorSpace);

  return anchorEle;
}

export default contactAnchorSpace;