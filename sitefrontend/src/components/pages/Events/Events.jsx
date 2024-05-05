import React from "react";
import {Container, Row, Col} from "react-bootstrap";

import EventCard from "../../EventCard";
import { getPageContent } from "../../../content/siteContent";

import "./Events.css";

export const Events = () => {
  const { eventList } = getPageContent("events");
  const containerClass = `row row row-cols-1 ${
    eventList?.length > 1 && "row-cols-md-2"
  }`;

  return (
    <div className="kwgc-events">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="event-heading">Events</h1>

            <div class={containerClass}>
              {eventList?.map((event, idx) => {
                const { title, image } = event;

                return (
                  <EventCard
                    key={`kwgcEvent-${idx}`}
                    eventTitle={title}
                    eventImageSrc={image}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Events;
