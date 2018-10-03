import React, { Component } from "react";
import { scaleBuilder } from "../../helper/builders/theoryBuilders/";
import { TheoryKey, TheoryMode } from "./index";

export default class TheoryPage extends Component {
  render() {
    let props = this.props;
    return (
      <div className="theory">
        <br />
        <TheoryMode className="mode"/>
        <TheoryKey />
        <br />
        <div id="carouselExampleControls" className="carousel slide" data-interval={false}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="scales d-flex align-content-stretch flex-wrap">
                {scaleBuilder(props.scale)}
              </div>
            </div>
            <div className="carousel-item">
            2
            </div>
            <div className="carousel-item">
            3
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    );
  }
}
