const ExperienceWrapper = (pName, cName, dates, desc) => {
  const wrapperEle = document.createElement('div');

  const positionName = document.createElement('div');
  const companyName = document.createElement('div');
  const dateRange = document.createElement('div');
  const description = document.createElement('div');

  positionName.textContent = pName;
  companyName.textContent = cName;
  dateRange.textContent = dates;
  description.textContent = desc;

  positionName.className = "section-opener";
  companyName.className = "section-header";
  dateRange.className = "date-range";
  description.className = "section-description";

  wrapperEle.className = "edex-section";

  wrapperEle.append(positionName, companyName, dateRange, description);

  return wrapperEle;
}

export default ExperienceWrapper;