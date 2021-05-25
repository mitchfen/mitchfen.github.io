import {
  SiGithub,
  SiLinkedin,
  SiMailDotRu,
  SiOrcid,
  SiHackerrank,
  SiDocker,
} from "react-icons/si";

const AnimatedSocials = () => {
  return (
    <>
      <fieldset>
        <legend>Links</legend>
        <a
          href="https://github.com/mitchfen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiGithub className="social" size={40} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/mitchfen/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiLinkedin className="social" size={40} />
        </a>{" "}
        <a
          href="https://www.hackerrank.com/mitchfen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiHackerrank className="social" size={40} />
        </a>{" "}
        <a
          href="https://orcid.org/0000-0002-9684-0447"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiOrcid className="social" size={40} />
        </a>{" "}
        <a href="mailto:mitchfen@protonmail.com">
          <SiMailDotRu className="social" size={40} />
        </a>{" "}
        <a
          href="https://hub.docker.com/u/mitchfen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <SiDocker className="social" size={40} />
        </a>{" "}
      </fieldset>
    </>
  );
};

export default AnimatedSocials;
