const ResAnchorSpace = () => {
  const anchorEle = document.createElement('div');
  const anchorSpace = document.createElement('div');
  const resAnchor = document.createElement('a');
  
  anchorSpace.className = "anchor";
  resAnchor.href = "#resume"
  resAnchor.id = "resume";

  anchorEle.id = "res-anchor";

  anchorEle.append(resAnchor, anchorSpace);

  return anchorEle;
}

export default ResAnchorSpace;