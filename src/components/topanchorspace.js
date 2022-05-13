const TopAnchorSpace = () => {
  const anchorEle = document.createElement('div');
  const anchorSpace = document.createElement('div');
  const topAnchor = document.createElement('a');
  
  anchorSpace.className = "anchor";
  topAnchor.href = "#top"
  topAnchor.id = "top";

  anchorEle.id = "top-anchor";

  anchorEle.append(topAnchor, anchorSpace);

  return anchorEle;
}

export default TopAnchorSpace;