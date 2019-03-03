import React, { Component } from "react";

import "./App.css";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: {
        title: "contendu",
        imgsrc: "test",
        description:
          "a marketplace for content marketers to be paired with students. built a new front-end interface in HTML & CSS upon an existing wordpress theme",
        technology: "wordpress, html, php, js",

        hyperlink: "http://contendu.com"
      },
      2: {
        title: "opcodo",
        imgsrc: "test",
        description: "an agency website. build with wordpress & HTML",
        technology: "wordpress, html, css",

        hyperlink: "http://opcodo.com"
      },
      3: {
        title: "between borders",
        imgsrc: "test",
        description:
          "an online magazine celebrating diversity. took an design brief and built with wordpress & HTML.",
        technology: "wordpress, html, css",

        hyperlink: "http://between-borders.com/"
      },
      4: {
        title: "weather mood",
        imgsrc: "test",
        description: "an app that changes background color based on user input",
        technology: "js, html, css",
        hyperlink: "https://wiillthomas.github.io/weather-mood/",
        github: "https://github.com/wiillthomas/weather-mood"
      },
      5: {
        title: "birth year films",
        imgsrc: "test",
        description: "an app that shows most popular movies from a given year",
        technology: "react, html, css",
        hyperlink: "https://wiillthomas.github.io/birth-movies/",
        github: "https://github.com/wiillthomas/birth-movies"
      },
      6: {
        title: "calculator",
        imgsrc: "test",
        description: "a simple calculator built in react",
        technology: "react, html, css",
        hyperlink: "https://wiillthomas.github.io/calculator/",
        github: "https://github.com/wiillthomas/birth-movies"
      }
    };
  }
  render() {
    return (
      <div className="portfolio-wrapper">
        will thomas
        <br />
        developer portfolio
        <hr />
        <div className="item-wrap">
          <PorfolioItem
            title={this.state[1].title}
            imgsrc={this.state[1].imgsrc}
            description={this.state[1].description}
            technology={this.state[1].technology}
            hyperlink={this.state[1].hyperlink}
            github={this.state[1].github}
          />
          <PorfolioItem
            title={this.state[2].title}
            imgsrc={this.state[2].imgsrc}
            description={this.state[2].description}
            technology={this.state[2].technology}
            github={this.state[2].github}
            hyperlink={this.state[2].hyperlink}
          />
          <PorfolioItem
            title={this.state[3].title}
            imgsrc={this.state[3].imgsrc}
            description={this.state[3].description}
            technology={this.state[3].technology}
            github={this.state[3].github}
            hyperlink={this.state[3].hyperlink}
          />
          <PorfolioItem
            title={this.state[4].title}
            imgsrc={this.state[4].imgsrc}
            description={this.state[4].description}
            technology={this.state[4].technology}
            github={this.state[4].github}
            hyperlink={this.state[4].hyperlink}
          />
          <PorfolioItem
            title={this.state[5].title}
            imgsrc={this.state[5].imgsrc}
            description={this.state[5].description}
            technology={this.state[5].technology}
            github={this.state[5].github}
            hyperlink={this.state[5].hyperlink}
          />
          <PorfolioItem
            title={this.state[6].title}
            imgsrc={this.state[6].imgsrc}
            description={this.state[6].description}
            technology={this.state[6].technology}
            github={this.state[6].github}
            hyperlink={this.state[6].hyperlink}
          />
        </div>
        <hr />
        <span className="contact-information">
          +44 7378 313 990 | wiillthomas@hotmail.com |{" "}
          <a href="https://github.com/wiillthomas">github</a>
        </span>
      </div>
    );
  }
}

class PorfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="portfolio-item">
        <b>
          <span className="title">{this.props.title}</span>
        </b>{" "}
        :: {this.props.description}
        <b>
          <div className="tech-wrapper">tech :: {this.props.technology} </div>
        </b>
        <div className="link-wrapper">
          <a href={this.props.hyperlink}>live</a> |{" "}
          <a href={this.props.github}>github</a>
        </div>
      </div>
    );
  }
}

export default Wrapper;
