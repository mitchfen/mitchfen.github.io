import headShot from "../assets/headshot.jpg";

import {
  SiGithub,
  SiLinkedin,
  SiMailDotRu,
  SiOrcid,
  SiHackerrank,
} from "react-icons/si";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <br />
          <br />
          <img src={headShot} width="100%" alt="Me" />
        </div>
        <div className="col-sm-9">
          <p>
            <br />
            <br />
            Welcome! My name is Mitchell Fenner. <br />
            I'm passionate about automation, and I'm always working on some type
            of project.
            <br />
            <br />
            <SiGithub />{" "}
            <a
              href="https://github.com/mitchfen"
              rel="noopener noreferrer"
              target="_blank"
            >
              mitchfen
            </a>
            <br />
            <SiLinkedin />{" "}
            <a href="https://www.linkedin.com/in/mitchfen/">mitchfen</a>
            <br />
            <SiHackerrank />{" "}
            <a
              href="https://hackerrank.com/mitchfen"
              rel="noopener noreferrer"
              target="_blank"
            >
              mitchfen
            </a>{" "}
            <br />
            <SiOrcid />{" "}
            <a href="https://orcid.org/0000-0002-9684-0447">
              0000-0002-9684-0447
            </a>
            <br />
            <SiMailDotRu />{" "}
            <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>
            <br />
            <br />
            I built this site with React and deployed on GitHub pages using
            GitHub actions.
            <br />
            <a href="https://github.com/mitchfen/personal_website">
              View the code 🡥
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
