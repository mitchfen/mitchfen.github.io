import React, { Component } from "react";

export class Project extends Component {
  static displayName = Project.name;
  static repoText = "";
  static tagsText = "";

  evaluateProps() {
    // Decide whether to show the link to GitHub
    if (this.props.repoLink) {
      this.repoText = "View the code on GitHub 🡥";
    }

    // Create the string to display the tags
    if (this.props.tags) {
      this.tagsText = ` [ ${this.props.tags[0]} ] `;
      for (let i = 1; i < this.props.tags.length; i++) {
        this.tagsText = this.tagsText + ` [ ${this.props.tags[i]} ] `;
      }
    }
  }

  render() {
    this.evaluateProps();
    return (
      <>
        <div className="row">
          {/* Middle column with content */}
          <div id="projectID" className="col-sm-9">
            <ul>
              <h3>{this.props.title}</h3>
              <small>
                <strong>{this.tagsText}</strong>
              </small>
              <br />
              <br />
              <li>{this.props.bulletPoint0}</li>
              <li>{this.props.bulletPoint1}</li>
              <li>{this.props.bulletPoint2}</li>
              <br />
              <a
                href={this.props.repoLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.repoText}
              </a>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
