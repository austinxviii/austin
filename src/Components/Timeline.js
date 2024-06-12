import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
  font-family: "Times New Roman", Times, serif;
  color: #ffffff;
  height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(17, 17, 17, 0.8);
  border-radius: 25px 0 0 25px;
  

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #303030;
    border-radius: 100px;
  }

   @media (max-width: 600px) {
    margin-top: -400px;
    margin-bottom: 0px;
    height: 450px;
  }
`;

const TimelineComponent = styled.div`
  margin: 0 20px 20px 20px;
  padding: ${({ bg }) => (bg ? '1.5em' : '0')};
  background: ${({ bg }) => (bg ? 'rgba(255, 255, 255, 0.4)' : 'transparent')};
  box-shadow: ${({ bg }) => (bg ? '0 0 5px rgba(0, 0, 0, 0.2)' : 'none')};
  border-radius: ${({ bg }) => (bg ? '10px' : '0')};

  @media (max-width: 600px) {
    padding: 10px 10px 10px 10px;
  }
`;

const TimelineMiddle = styled.div`
  position: relative;
  background: #ffffff;
`;

const TimelinePoint = styled.div`
  position: absolute;
  top: ${({ bottom }) => (bottom ? 'initial' : '0')};
  bottom: ${({ bottom }) => (bottom ? '0' : 'initial')};
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 15px;
  background: #ffffff;
  border-radius: 50%;
`;

const TimelineDate = styled.div`
  text-align: ${({ right }) => (right ? 'right' : 'left')};

  @media (max-width: 600px) {
    margin: -15px;
  }
`;

const TimelineTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const TimelineParagraph = styled.p`
  line-height: 1.5;
  
  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineComponent>
        <TimelineDate right>June 10, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent bg>
        <TimelineTitle>Continuous Random Variable</TimelineTitle>
        <TimelineParagraph>
          My first YouTube video was a tutorial on how to build a client-server sockets app in Java.
        </TimelineParagraph>
      </TimelineComponent>
      <TimelineComponent bg>
        <TimelineTitle>5,000 Subscribers Q&A</TimelineTitle>
        <TimelineParagraph>
          To celebrate 5,000 subscribers, I published a video answering some of the most popular questions which my viewers
          had asked me since starting my YouTube channel.
        </TimelineParagraph>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent>
        <TimelineDate>May 25, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineComponent>
        <TimelineDate right>May 3, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent bg>
        <TimelineTitle>First Live Stream</TimelineTitle>
        <TimelineParagraph>In my first ever live stream, I couldn't put my cup of coffee down.</TimelineParagraph>
      </TimelineComponent>
      <TimelineComponent bg>
        <TimelineTitle>Vertical Timeline</TimelineTitle>
        <TimelineParagraph>Published this video.</TimelineParagraph>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
        <TimelinePoint bottom />
      </TimelineMiddle>
      <TimelineComponent>
        <TimelineDate>April 28, 2024</TimelineDate>
      </TimelineComponent>
    </TimelineWrapper>
  );
};

export default Timeline;
