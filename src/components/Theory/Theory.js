import React, { Component } from "react";
import { scaleBuilder } from "../builders/";
import { TheoryKey, TheoryMode } from "./index";
import { TheoryContext } from "../../contexts/TheoryContext";

export default class TheoryPage extends Component {
  render() {
    let props = this.props;
    return (
      <div className="theory">
        <TheoryMode className="mode" />
        <TheoryKey />
        <TheoryContext.Consumer>
          {({ key }) => <div className="key-title">Key: {key}</div>}
        </TheoryContext.Consumer>

        <div
          id="carouselExampleControls"
          className="carousel slide theory-carousel"
          data-interval={false}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="scales">
                {scaleBuilder(props.scale)}
              </div>
            </div>
            {/* <div className="carousel-item" />
            <div className="carousel-item" /> */}
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
