import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Timeline from './Timeline';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <h2 className='tinos-bold'>What's on the Tabs?</h2>
          </Col>
          <Col size={12} md={6}>
            <Timeline />
          </Col>
        </Row>
      </Container>
    </section>
  );
};