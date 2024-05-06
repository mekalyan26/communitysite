import React from "react";
import { Container } from "react-bootstrap";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "./AboutUsContent.css";

export const AboutUsContent = () => {
  return (
    <div className="kwgc-aboutus">
      <Container>
        <div className="py-5">
          <h3 className="heading"> KWGC Bengali Cultural Group</h3>

          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "rgb(95 113 145)", color: "#fff" }}
            >
              <p>
                Goddess Durga represents the united front of all divine forces
                against all negative forces. Bengalies all over the world during
                the days of Durga Puja rejoice to their heart’s content
                reconnecting with friends and families. Durga Puja is an
                occasion when the familiar sound of Dhak , Dhunuchi nachh, the
                fragrance of incense gives a familiar tug to every Bengali
                heart. Uta Chatterjee and Robin Chatterjee along with friends
                were able to create home away from home feeling at the mandap of
                Kitchener Waterloo in 2010.
              </p>
              <p>
                The best part of Durga Puja is kichuri bogh which is prepared
                and served with great love.
              </p>
              <p>
                Year 2018 was when Kitchener Waterloo (KWGC ) Bengali Cultural
                Group welcomed Maa Durga Protima from Kolkata, a moment
                cherished by everyone who made this possible. We welcomed around
                300 guests throughout the day. This gave us more encouragement
                to continue.
              </p>
              <a href="#">Read more</a>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsContent;
