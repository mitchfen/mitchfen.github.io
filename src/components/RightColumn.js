const LeftColumn = () => {
  return (
    <>
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
            experimenting with a dockerized version dockerized version hosted on
            Digital Ocean.
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
        <a
          href="https://github.com/mitchfen/Windows_setup_script"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          Windows Setup Script
        </a>
        <ul>
          <li>
            PowerShell script which uses Chocolatey to setup a new Windows
            machine to my liking.
          </li>
        </ul>
      </fieldset>
    </>
  );
};

export default LeftColumn;
