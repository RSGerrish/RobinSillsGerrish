const PortAnchorSpace = () => {
  const anchorEle = document.createElement('div');
  const anchorSpace = document.createElement('div');
  const portAnchor = document.createElement('a');
  
  anchorSpace.className = "anchor";
  portAnchor.href = "#portfolio"
  portAnchor.id = "portfolio";

  anchorEle.id = "port-anchor";

  anchorEle.append(portAnchor, anchorSpace);

  return anchorEle;
}

export default PortAnchorSpace;