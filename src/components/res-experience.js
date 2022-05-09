import ExperienceWrapper from './exp-wrapper.js';

const ResumeExperience = (exp1, exp2, exp3, exp4) => {
  const experienceEle = document.createElement('div');
  const experienceTitle = document.createElement('div');

  experienceTitle.textContent = "Experience";
  experienceTitle.className = "section-title";

  experienceEle.appendChild(experienceTitle);
  experienceEle.appendChild(ExperienceWrapper(exp1.pname, exp1.cname, exp1.dates, exp1.desc));
  experienceEle.appendChild(ExperienceWrapper(exp2.pname, exp2.cname, exp2.dates, exp2.desc));
  experienceEle.appendChild(ExperienceWrapper(exp3.pname, exp3.cname, exp3.dates, exp3.desc));
  experienceEle.appendChild(ExperienceWrapper(exp4.pname, exp4.cname, exp4.dates, exp4.desc));

  return experienceEle;
}

export default ResumeExperience;