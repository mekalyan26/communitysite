import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-col">
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">events</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div className="footer-col">
              <h4>Cultural</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">donation</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col>
            <div className="footer-col">
              <h4>follow us</h4>

              <div className="d-flex gap-3">
                <a href="#">
                  <FaFacebook size={'1.5em'} color='white' />
                </a>
                <a href="#">
                  <FaXTwitter size={'1.5em'} color='white' />
                </a>
                <a href="#">
                  <FaInstagram size={'1.5em'} color='white' />
                </a>
                <a href="#">
                  <FaLinkedin size={'1.5em'} color='white' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
