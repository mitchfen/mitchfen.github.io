import publicKey from "../assets/mitchfen.asc";

const Files = () => {
  return (
    <>
      <fieldset>
        <legend>Files</legend>
        <p>
          <a href={publicKey} target="_blank" rel="noreferrer noopener">
            publickey.asc
          </a>
        </p>
      </fieldset>
    </>
  );
};

export default Files;
