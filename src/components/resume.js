import ResumeHead from './res-head.js';
import ResumeSummary from './res-summary.js';
import ResumeSkills from './res-skills.js';
import ResumeEducation from './res-education.js';
import ResumeExperience from './res-experience.js';

const Resume = () => {
  const name = "Robin Gerrish";
  const email = "robin@RobinSillsGerrish.com";
  const phone = "610-413-6063";
  const github = "https://github.com/RSGerrish";
  const linkedin = "https://linkedin.com/in/robingerrish";

  const summary1 = "Composite Engineer from the racing, aerospace and defense industries with strong desire to pursue a career in software or web development";
  const summary2 = "Developed key general skills in past positions  such as management, customer service, strong communication and logical problem solving";
  const summary3 = "Web Developer trained in HTML5, CSS3 and Javascript"
  const summary4 = "Additional experience in GitHub, Webpack with various plugins and SQL"

  const skills = ['Full-Stack Development', 'Webpack', 'Git', 'npm', 'Jest', 'Node.js', 'Express', 'React', 'PHP'];
  
  const education1 = {
    sname: "The Odin Project",
    dname: "Certificate, Full Stack Web Development",
    dates: "Apr 2022 - Jun 2022",
    desc: "TheOdinProject.com - The Odin Project provides a free open source coding curriculum that can be taken entirely online. The curriculum is meticulously curated to ensure the content is up-to-date by a team of dedicated volunteers."
  }

  const education2 = {
    sname: "Reading Area Community College",
    dname: "Associate of Business Management",
    dates: "Graduated June 2012"
  }

  const experience1 = {
    pname: "Composite Fabricator",
    cname: "Composite Resources",
    dates: "Jan 2021 - Mar 2022",
    desc: "Responsibilities include composite fabrication, manual machining, and handling occasional research and development projects"
  }

  const experience2 = {
    pname: "Inventory Manager",
    cname: "Multimatic Inc.",
    dates: "May 2019 - May 2020",
    desc: "Responsibilities include customer support, inventory management of all in-house GT3 and GT4 OEM parts for the US customer suppport program, and occasional travel to race events"
  }

  const experience3 = {
    pname: "Project Engineer",
    cname: "Composite Resources",
    dates: "May 2018 - May 2019",
    desc: "Project Engineer with focus in quoting potential work and designing composite parts"
  }

  const experience4 = {
    pname: "Purchaser",
    cname: "Riley Technologies",
    dates: "Dec 2016 - May 2018",
    desc: "Responsibilities include but are not limited to sourcing materials, creating and submitting purchase orders, receiving inventory, maintaining inventory, creating and editing BOM's and occasionaly traveling to race events"
  }

  const resumeEle = document.createElement('div');

  resumeEle.id = "resume-body";
  
  resumeEle.appendChild(ResumeHead(name, email, phone, github, linkedin));
  resumeEle.appendChild(ResumeSummary(summary1, summary2, summary3, summary4));
  resumeEle.appendChild(ResumeSkills(skills));
  resumeEle.appendChild(ResumeEducation(education1, education2));
  resumeEle.appendChild(ResumeExperience(experience1, experience2, experience3, experience4));
  return resumeEle;
}

export default Resume;