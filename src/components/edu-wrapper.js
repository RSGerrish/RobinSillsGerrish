const EducationWrapper = (sName, dName, dates, desc) => {
  const wrapperEle = document.createElement('div');

  const schoolName = document.createElement('div');
  const degreeName = document.createElement('div');
  const dateRange = document.createElement('div');
  
  schoolName.textContent = sName;
  degreeName.textContent = dName;
  dateRange.textContent = dates;

  schoolName.className = "section-opener";
  degreeName.className = "section-header";
  dateRange.className = "date-range";

  wrapperEle.className = "edex-section";

  wrapperEle.append(schoolName, degreeName, dateRange);

  if(desc) {
    const description = document.createElement('div');
    description.textContent = desc;
    description.className = "section-description";
    wrapperEle.appendChild(description);
  }

  return wrapperEle;
}

export default EducationWrapper;