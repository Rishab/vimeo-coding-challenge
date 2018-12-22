import React, { Component } from "react";
import { Col, Row, Carousel, Button } from "react-bootstrap";
import "./Carousel.css";

class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item className="hunt carousel-outer blur-30px">
          <Row>
            <Col xs={4} sm={4} md={4}>
              <img
                className="carousel-image"
                src="https://m.media-amazon.com/images/M/MV5BMjI1MDQ2MDg5Ml5BMl5BanBnXkFtZTgwMjc2NjM5ODE@._V1_SY1000_SX675_AL_.jpg"
              />
            </Col>
            <Col xs={8} sm={8} md={8}>
              <h3 className="movie-title">Hunt for the Wilderpeople</h3>
              <p className="movie-description">
                Raised on hip-hop and foster care, defiant city kid Ricky gets a
                fresh start in the New Zealand countryside. From the director of
                What We Do In The Shadows.
              </p>

              <a href="#" class="btn btn-info">
                <span class="glyphicon glyphicon-play-circle" /> Buy Now
              </a>
              <button type="button" class="btn btn-outline-light">
                Watch Trailer
              </button>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="carousel-outer blur-30px decent">
          <Row>
            <Col xs={4} sm={4} md={4}>
              <img
                className="carousel-image"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Nichtspassiertplakat_CC.jpg"
              />
            </Col>
            <Col xs={8} sm={8} md={8}>
              <h3 className="movie-title">Nichts passiert/A Decent Man</h3>
              <p className="movie-description">
                A Swiss family takes a ski vacation and runs into trouble when
                the father, the titular decent man, finds himself in a series of
                moral quandaries.
              </p>
              <a href="#" class="btn btn-info">
                <span class="glyphicon glyphicon-play-circle" /> Buy Now
              </a>
              <button type="button" class="btn btn-outline-light">
                Watch Trailer
              </button>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="carousel-outer blur-30px vice-versa">
          <Row>
            <Col xs={4} sm={4} md={4}>
              <img
                className="carousel-image"
                src="http://thesitzmark.com/wp-content/uploads/2016/10/Vice-Versa-Cover-Art-584x800.jpg"
              />
            </Col>
            <Col xs={8} sm={8} md={8}>
              <h3 className="movie-title">Vice Versa</h3>
              <p className="movie-description">
                Come along with the Good Company crew as they travel throughout
                the US, Japan, BC, and Quebec to showcase skiing in the best way
                possible
              </p>
              <a href="#" class="btn btn-info">
                <span class="glyphicon glyphicon-play-circle" /> Buy Now
              </a>
              <button type="button" class="btn btn-outline-light">
                Watch Trailer
              </button>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item className="carousel-outer blur-30px fourth-phase">
          <Row>
            <Col xs={4} sm={4} md={4}>
              <img
                className="carousel-image"
                src="https://m.media-amazon.com/images/M/MV5BOGVhNjUwYTItYmI2NS00ZGI1LWE5ZDQtMWVjMTIyODAzMDI4XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_.jpg"
              />
            </Col>
            <Col xs={8} sm={8} md={8}>
              <h3 className="movie-title">The Fourth Phase</h3>
              <p className="movie-description">
                From the creators of The Art of FLIGHT, Red Bull Media House
                presents THE FOURTH PHASE, a snowboarding epic starring iconic
                athlete Travis Rice.
              </p>
              <a href="#" class="btn btn-info">
                <span class="glyphicon glyphicon-play-circle" /> Buy Now
              </a>
              <button type="button" class="btn btn-outline-light">
                Watch Trailer
              </button>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    );
  }
}

//render(<ControlledCarousel />);

export default ControlledCarousel;
