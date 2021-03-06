import resume from "../assets/Mitchell_Fenner_Resume.pdf";

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
            <legend style={{ borderStyle: "round" }}>greeting.cob</legend>
            <code className="pink">IDENTIFICATION DIVISION.</code>
            <br />
            <code className="pink">PROGRAM-ID. </code>
            <code>mitchfenxyz.</code>
            <br />
            <code className="pink">AUTHOR. </code>
            <code className="cyan">Mitchell Fenner.</code>
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
            <legend>links.svg</legend>
            <a
              href="https://github.com/mitchfen"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub className="social" size={35} />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/mitchfen/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiLinkedin className="social" size={35} />
            </a>{" "}
            <a
              href="https://www.hackerrank.com/mitchfen"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiHackerrank className="social" size={35} />
            </a>{" "}
            <a
              href="https://orcid.org/0000-0002-9684-0357"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiOrcid className="social" size={35} />
            </a>{" "}
            <a href="mailto:mitchfen@protonmail.com">
              <SiMailDotRu className="social" size={35} />
            </a>
          </fieldset>
          <br />
          <fieldset>
            <legend>Downloads/</legend>
            <p>
              <a href={resume}>Resume</a>
            </p>
          </fieldset>
        </div>
        <br />
        <div className="right-column">
          <fieldset>
            <legend>recentProjects.txt</legend>
            <a
              href="https://github.com/mitchfen/mitchfen.github.io"
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: "larger" }}
            >
              This website
            </a>
            <ul>
              <li>
                Being more interested in DevOps than front-end development, I am
                using this site as an opportunity to play with CI/CD pipelines,
                Docker, and cloud hosting platforms.
              </li>
              <br />
              <li>
                Built with React, and automated with GitHub Actions. I am also
                experimenting with a dockerized version including an ASP.NET
                Core 5.0 backend{" "}
                <a
                  href="https://github.com/mitchfen/mitchfen.github.io/tree/implementing-backend"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </a>
                .
              </li>
            </ul>
            <a
              href="https://github.com/mitchfen/ore_price_checker"
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: "larger" }}
            >
              Eve Online Price Checker
            </a>
            <ul>
              <li>
                Dockerized TypeScript app which uses a REST API to determine the
                most profitable ore to mine in EVE Online.
              </li>
            </ul>
            <a
              href="https://github.com/mitchfen/concert_tracker"
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontSize: "larger" }}
            >
              Concert Tracker
            </a>
            <ul>
              <li>
                Cross platform Python GUI to keep track of concerts and artists.
                Uses SQLite and Tk.
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default About;
