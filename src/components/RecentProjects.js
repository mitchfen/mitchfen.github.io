const RecentProjects = () => {
  return (
    <>
      <fieldset>
        <legend>Recent Projects</legend>
        <a
          href="https://github.com/mitchfen/ore_price_checker"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          Eve Online Price Checker
        </a>
        <p>
          TypeScript console app which determines the most profitable ore to
          mine in EVE Online.
        </p>
        <br />
        <a
          href="https://github.com/mitchfen/concert_tracker"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          Concert Tracker
        </a>
        <p>
          Cross platform Python GUI to keep track of concerts and artists. Uses
          SQLite and Tk.
        </p>
        <br />
        <a
          href="https://github.com/mitchfen/mitchfen.github.io"
          rel="noopener noreferrer"
          target="_blank"
          style={{ fontSize: "larger" }}
        >
          This website
        </a>
        <p>
          I'm using this site as an opportunity to play with GitHub Actions,
          Docker, and React. Currently hosted on GitHub pages.
        </p>
        <br />
      </fieldset>
    </>
  );
};

export default RecentProjects;
