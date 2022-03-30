import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently studying <b>Computer Science</b> at{" "}
        <b> University of Central Missouri</b>, with a focus in Computer Science and
        Softeare Engineering. I plan to graduate in <b>May 2022</b>. 
        Before Central Missouri I graduated from <b>Hawkeye Community Colledge in 2019</b>.
      </p>
    );
    const two = (
      <p>
        I'm into any sort of <b>software development</b> that requires
        creativity. My other areas of interest include <b>frontend development</b> and
        <b> machine learning</b>.
        I also like my fair share of visual arts and video editing. In my free
        time, I trade fifa cards, read and watch movies.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:gazi.jarin@mail.utoronto.ca">
          gazi.jarin@mail.utoronto.ca
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Java",
      "Python",
      "React.js",
      "C",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
