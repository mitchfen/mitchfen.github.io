//import resume from "../assets/Mitchell-Fenner-resume.pdf";

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
      <div className="flex-parent">
        <div className="left-column">
          <fieldset>
            <legend style={{ borderStyle: "round" }}>intro.cob</legend>
            <code className="pink">IDENTIFICATION DIVISION.</code>
            <br />
            <code className="pink">PROGRAM-ID. </code>
            <code>mitchfen.xyz.</code>
            <br />
            <code className="pink">AUTHOR. </code>
            <code className="yellow">Mitchell Fenner.</code>
            <br />
            <code className="pink">PROCEDURE DIVISION.</code>
            <br />
            <code className="pink">DISPLAY </code>

            <code>"Welcome to my site! 🤗"</code>
            <br />
            <code className="pink">STOP RUN.</code>
          </fieldset>
          <br />
          <fieldset>
            <legend>contact.txt</legend>
            <a
              href="https://github.com/mitchfen"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub className="social" size={44} />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/mitchfen/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiLinkedin className="social" size={44} />
            </a>{" "}
            <a
              href="https://www.hackerrank.com/mitchfen"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiHackerrank className="social" size={44} />
            </a>{" "}
            <a
              href="https://orcid.org/0000-0002-9684-0447"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiOrcid className="social" size={44} />
            </a>{" "}
            <a href="mailto:mitchfen@protonmail.com">
              <SiMailDotRu className="social" size={44} />
            </a>
            <br />
            <small>
              <a
                href="https://github.com/mitchfen/personal_website"
                rel="noopener noreferrer"
                target="_blank"
              >
                View the code for this site 🡥
              </a>
            </small>
          </fieldset>
        </div>
        <br />
        <div className="right-column">
          <fieldset>
            <legend>recent-projects.txt</legend>
            <p>
              <p className="pink">This website! 🌐</p>
              <ul>
                <li>
                  Built with React and automated with GitHub Actions. I am more
                  interested in DevOps than front end development, so I am using
                  the site as an opportunity to play with CI/CD, Docker, and
                  cloud hosting platforms.
                </li>
              </ul>
            </p>
            <p>
              <p className="pink">Eve Online Price Checker 📡</p>
              <ul>
                <li>
                  Dockerized TypeScript app which uses a REST API to determine
                  which ore to mine in EVE Online.
                </li>
              </ul>
            </p>
            <p>
              <p className="pink">QEMU/KVM Homelab 🧪</p>
              <ul>
                <li>
                  Built my home server running a Ryzen 2700 and Arch Linux. I
                  setup VMs for pfSense and Windows using VFIO for hardware
                  passthrough. Also runs pi-hole under docker, Grafana for
                  monitoring, and samba to serve files.
                </li>
              </ul>
            </p>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default About;
