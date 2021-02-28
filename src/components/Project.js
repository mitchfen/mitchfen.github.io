import PropTypes from "prop-types";

const Project = ({
  title,
  repoLink,
  bulletPoint0,
  bulletPoint1,
  bulletPoint2,
  tags,
}) => {
  let repoText = "";
  let tagsText = "";

  // Decide whether to show the link to GitHub
  if (repoLink === "") {
    repoText = "";
  } else {
    repoText = "View the code on GitHub 🡥";
  }

  // Create the string to display the tags
  if (tags) {
    for (let i = 0; i < tags.length; i++) {
      tagsText = tagsText + ` [ ${tags[i]} ] `;
    }
  }

  return (
    <>
      <div className="row">
        {/* Middle column with content */}
        <div id="projectID" className="col-sm-9">
          <ul>
            <h4>{title}</h4>
            <small>
              <strong>{tagsText}</strong>
            </small>
            <br />
            <br />
            <li>{bulletPoint0}</li>
            <li>{bulletPoint1}</li>
            <li>{bulletPoint2}</li>
            <br />
            <a href={repoLink} rel="noopener noreferrer" target="_blank">
              {repoText}
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

Project.propTypes = {
  title: PropTypes.string,
  repoLink: PropTypes.string,
  bulletPoint0: PropTypes.string,
  bulletPoint1: PropTypes.string,
  bulletPoint2: PropTypes.string,
};

export default Project;
