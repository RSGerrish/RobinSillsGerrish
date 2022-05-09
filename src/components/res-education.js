import EducationWrapper from './edu-wrapper.js';

const ResumeEducation = (edu1, edu2) => {
  const educationEle = document.createElement('div');
  const educationTitle = document.createElement('div');

  educationTitle.textContent = "Education";
  educationTitle.className = "section-title";

  educationEle.id = "education-container";
  
  educationEle.appendChild(educationTitle);
  educationEle.appendChild(EducationWrapper(edu1.sname, edu1.dname, edu1.dates, edu1.desc));
  educationEle.appendChild(EducationWrapper(edu2.sname, edu2.dname, edu2.dates, edu2.desc));

  return educationEle;
}

export default ResumeEducation;