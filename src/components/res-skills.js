const ResumeSkills = (skillList) => {
  const skillsEle = document.createElement('div');
  const skillsTitle = document.createElement('div');
  const skillsWrapper = document.createElement('div');
  const skillsPosition = document.createElement('div');

  skillsEle.id = "skills-container"

  skillsTitle.className = "section-title";
  skillsTitle.id = "skills-title";
  skillsTitle.textContent = "Skills";

  skillList.forEach((item, index) => {
    const skillDiv = document.createElement('div');
    skillDiv.textContent = item;
    skillDiv.id = `skill-${index}`

    if (index < skillList.length - 1) {
      const skillSep = document.createElement('div');
      skillSep.textContent = "•";
      skillSep.id = `sep-${index}`;
      skillsWrapper.append(skillDiv, skillSep);
    } else {
      skillsWrapper.appendChild(skillDiv);
    }
  });

  skillsWrapper.id = "skills-wrapper";

  skillsPosition.appendChild(skillsWrapper);
  skillsPosition.id = "skills-position";

  skillsEle.append(skillsTitle, skillsPosition);

  return skillsEle;
}

export default ResumeSkills;