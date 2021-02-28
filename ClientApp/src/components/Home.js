import React, { Component } from "react";

import headShot from "../assets/headshot.jpg";

import {
  SiGithub,
  SiLinkedin,
  SiMailDotRu,
  SiOrcid,
  SiHackerrank,
} from "react-icons/si";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <br />
          <img src={headShot} width="105%" alt="My face" />
        </div>
        <div className="col-md-9">
          <p>
            <br />
            Welcome! My name is Mitchell Fenner. <br />
            I'm passionate about automation, and I'm always working on some type
            of project.
            <br />
            <br />
            <SiGithub />{" "}
            <a
              href="https://github.com/mitchfen"
              target="_blank"
              rel="noopener noreferrer"
            >
              mitchfen
            </a>
            <br />
            <SiLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/mitchfen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mitchfen
            </a>
            <br />
            <SiHackerrank />{" "}
            <a
              href="https://hackerrank.com/mitchfen"
              target="_blank"
              rel="noopener noreferrer"
            >
              mitchfen
            </a>
            <br />
            <SiOrcid />{" "}
            <a
              href="https://orcid.org/0000-0002-9684-0447"
              target="_blank"
              rel="noopener noreferrer"
            >
              0000-0002-9684-0447
            </a>
            <br />
            <SiMailDotRu />{" "}
            <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>
            <br />
            <br />
            I built this site with React, ASP.NET Core 5.0, and Bootstrap.
            <br />
            It's deployed on Azure as a Docker container.
            <a
              href="https://github.com/mitchfen/personal_website"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; View the code 🡥
            </a>
          </p>
        </div>
      </div>
    );
  }
}
