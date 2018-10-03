import React, { Component } from "react";
import { scaleBuilder } from "../../helper/builders/theoryBuilders/";
import { TheoryKey, TheoryMode } from "./index";

export default class TheoryPage extends Component {
  render() {
    let props = this.props;
    return (
      <div className="theory">
        <br />
        <TheoryMode />
        <TheoryKey />
        <br />
        <div id="carouselExampleControls" class="carousel slide" data-interval={false}>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="scales d-flex align-content-stretch flex-wrap">
                {scaleBuilder(props.scale)}
              </div>
            </div>
            <div class="carousel-item">
            2
            </div>
            <div class="carousel-item">
            3
            </div>
          </div>

          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>
    );
  }
}
