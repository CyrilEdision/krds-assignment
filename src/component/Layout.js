import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as MobileCarousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: [],
      items: []
    };
  }
  componentDidMount = () => {
    fetch("https://krds-assignment.github.io/aoc/api-assets/data.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            logo: result.logo,
            items: result.features
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  };
  render() {
    return (
      <div>
        <div className="logo">
          <img
            src={this.state.logo}
            className="img-responsive"
            alt="logo"
          />
        </div>
        <MobileCarousel
          autoPlay={false}
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          showArrows={true}
          axis={"horizontal"}
          stopOnHover={true}
          swipeScrollTolerance={50}
        >
          {this.state.items.map((value, index) => {
            return (
              <div key={index} className="device">
                <div className="device-inner">
                  <img
                    src={value.logo}
                    className="img-responsive"
                    alt="device"
                  />
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
                <div className="device-inner">
                  <img
                    src={value.image}
                    className="img-responsive"
                    alt="activities"
                  />
                </div>
              </div>
            );
          })}
        </MobileCarousel>
      </div>
    );
  }
}
export default Layout;
