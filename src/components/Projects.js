import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "Dog Park Location Finder": {
        desc:
          "An application created for users to find the highest quality pet park near them.",
        techStack: "Javascript, React, Springboot, SQL, Maven",
        link: "https://github.com/Aaron7Thole/Gilgamesh_SE4920_Spring22",
      },
      "Commerce Bank Project": {
        desc:
          "An alert tracking application that sends notifications to users if their account is flagged. It also has an admins side that lets bank admins aknowledge alert and send a note to the user",
        techStack: "Javascript, HTML / CSS, Gradle, Sql",
        link: "https://github.com/Aaron7Thole/CommerceLogin",
      },
      "Terminal Chat Room": {
        desc:
          "A chat room program that allows multiple people to instant messaging in apple terminal or command prompt.",
        techStack: "Python, Docker",
        link: "https://github.com/Aaron7Thole/Terminal-Chat-Room",
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
