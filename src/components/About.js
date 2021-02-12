import pgpKey from "../assets/mitchfen.asc";
import headShot from "../assets/headshot.jpg";

import { SiGithub, SiLinkedin, SiMailDotRu, SiOrcid } from "react-icons/si";
import { GoLock } from "react-icons/go";

const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <h2>Mitchell Fenner</h2>
          <img src={headShot} width="100%" alt="My cute face." />
        </div>
        <div className="col-sm-9">
          <p>
            <br />
            <br />
            Welcome!
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
            <SiOrcid />{" "}
            <a href="https://orcid.org/0000-0002-9684-0447">
              0000-0002-9684-0447
            </a>
            <br />
            <SiMailDotRu />{" "}
            <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>
            <br />
            <GoLock />{" "}
            <a href={pgpKey} rel="noopener noreferrer" target="_blank">
              Download my public PGP key
            </a>{" "}
            &#8595;
            <br />
            <br />
            I built this site with React, JavaScript, and Bootstrap.
            <br />
            It's deployed on GitHub pages by GitHub actions!
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
