import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Col, Row, Image, Carousel } from "react-bootstrap";
import "./Layout.css";
import ControlledCarousel from "./Carousel.jsx";
import { ButtonGroup } from "semantic-ui-react";

class Layout extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="image-text">
            <Col xs={12} sm={12} md={6} className="visible-md visible-lg">
              <Image
                className="image-layout"
                src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
              />
            </Col>
            <Col xs={12} sm={12} md={6} className="text-layout">
              <h2>Monsoon III</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tincidunt ipsum augue. In faucibus vehicula magna pulvinar
                aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed
                lorem egestas mauris venenatis commodo eu id nibh. Ut porta
                libero sed semper faucibus.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} className="visible-xs visible-sm">
              <Image
                className="image-layout"
                src="https://i.vimeocdn.com/video/595198868_505x160.jpg"
              />
            </Col>
          </Row>
        </Grid>
        <div className="bg-gradient">
          <Grid>
            <Row>
              <Col xs={12} sm={12} md={6} className="text-layout-2">
                <h2>
                  <strong>BEAMS</strong>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tincidunt ipsum augue. In faucibus vehicula magna pulvinar
                  aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed
                  lorem egestas mauris venenatis commodo eu id nibh. Ut porta
                  libero sed semper faucibus.
                </p>
              </Col>
              <Col xs={12} sm={12} md={6}>
                <Image
                  className="image-layout"
                  src="https://i.vimeocdn.com/video/589972810_530x315.jpg"
                />
              </Col>
            </Row>
            <Row className="text-layout-2 image-space">
              <Col xs={12} sm={12} md={6} className="visible-md visible-lg">
                <Image
                  className="image-layout"
                  src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
                />
              </Col>
              <Col xs={12} sm={12} md={6} className="text-layout">
                <h2>Move 2</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tincidunt ipsum augue. In faucibus vehicula magna pulvinar
                  aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed
                  lorem egestas mauris venenatis commodo eu id nibh. Ut porta
                  libero sed semper faucibus.
                </p>
              </Col>
              <Col xs={12} sm={12} md={6} className="visible-xs visible-sm">
                <Image
                  className="image-layout"
                  src="https://i.vimeocdn.com/video/590587169_530x315.jpg"
                />
              </Col>
            </Row>
          </Grid>
        </div>
        <ControlledCarousel />
      </div>
    );
  }
}

export default Layout;
