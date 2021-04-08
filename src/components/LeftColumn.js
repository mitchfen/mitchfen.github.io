import {
  SiGithub,
  SiLinkedin,
  SiMailDotRu,
  SiOrcid,
  SiHackerrank,
  SiDocker,
} from "react-icons/si";

const LeftColumn = () => {
  return (
    <>
      <fieldset>
        <legend style={{ borderStyle: "round" }}>greeting.cob</legend>
        <code className="pink">IDENTIFICATION DIVISION.</code>
        <br />
        <code className="pink">PROGRAM-ID. </code>
        <code>mitchfenxyz.</code>
        <br />
        <code className="pink">AUTHOR. </code>
        <code className="green">Mitchell Fenner.</code>
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
        <legend>contact.ico</legend>
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
          href="https://orcid.org/0000-0002-9684-0447"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiOrcid className="social" size={35} />
        </a>{" "}
        <a href="mailto:mitchfen@protonmail.com">
          <SiMailDotRu className="social" size={35} />
        </a>
        <a
          href="https://hub.docker.com/u/mitchfen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiDocker className="social" size={35} />
        </a>{" "}
      </fieldset>
      <br />
      <fieldset>
        <legend>Downloads/</legend>
        <p>
          <a
            href="https://mitchfen.xyz/documents/Mitchell_Fenner_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </p>
      </fieldset>
    </>
  );
};

export default LeftColumn;
