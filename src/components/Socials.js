import {
  SiGithub,
  SiLinkedin,
  SiMailDotRu,
  SiOrcid,
  SiHackerrank,
} from "react-icons/si";

const Socials = () => {
  return (
    <>
      <fieldset>
        <legend>Links</legend>
        <SiGithub size={25} />{" "}
        <a
          href="https://github.com/mitchfen"
          target="_blank"
          rel="noreferrer noopener"
        >
          mitchfen
        </a>
        <br />
        <br />
        <SiLinkedin size={25} />{" "}
        <a
          href="https://www.linkedin.com/in/mitchfen/"
          rel="noopener noreferrer"
          target="_blank"
        >
          mitchfen
        </a>
        <br />
        <br />
        <SiHackerrank size={25} />{" "}
        <a
          href="https://www.hackerrank.com/mitchfen"
          rel="noopener noreferrer"
          target="_blank"
        >
          mitchfen
        </a>
        <br />
        <br />
        <SiOrcid size={25} />{" "}
        <a
          href="https://orcid.org/0000-0002-9684-0447"
          rel="noopener noreferrer"
          target="_blank"
        >
          0000-0002-9684-0447
        </a>
        <br />
        <br />
        <SiMailDotRu size={25} />{" "}
        <a href="mailto:mitchfen@protonmail.com">mitchfen@protonmail.com</a>{" "}
      </fieldset>
    </>
  );
};

export default Socials;
