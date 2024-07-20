import React from 'react';
import styled from 'styled-components';

const TimelineWrapper = styled.div`
  margin: -80px 100px 0 -100px;
  max-width: 750px;
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
  font-family: "Times New Roman", Times, serif;
  color: #ffffff;
  height: 400px;
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

   @media (max-width: 1100px) {
    margin: 30px 30px 0 30px;
    height: 450px;
  }
`;

const TimelineComponent = styled.div`
  margin: 0 20px 20px 20px;
  padding: ${({ bg }) => (bg ? '1.5em' : '0')};
  background: ${({ bg }) => (bg ? 'rgba(255, 255, 255, 0.4)' : 'transparent')};
  box-shadow: ${({ bg }) => (bg ? '0 0 5px rgba(0, 0, 0, 0.2)' : 'none')};
  border-radius: ${({ bg }) => (bg ? '10px' : '0')};

  @media (max-width: 1100px) {
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

  @media (max-width: 1100px) {
    margin: -15px;
  }
`;

const TimelineTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1100px) {
    font-size: 15px;
  }
`;

const TimelineParagraph = styled.p`
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  line-height: 1;
  margin-left: 0;
  align-content: left;
  
  @media (max-width: 1100px) {
    font-size: 11px;
  }
`;

const Timeline = () => {
  return (
    <TimelineWrapper>
      <TimelineComponent bg>
        <TimelineTitle>Scheduling</TimelineTitle>
        <TimelineParagraph>
          <ul>
            <li>Scheduling Algorithms</li>
            <li>Statistics(Maximum Likelihood Estimator)</li>
          </ul>
        </TimelineParagraph>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent>
        <TimelineDate>July 20, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineComponent>
        <TimelineDate right>July 19, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent bg>
        <TimelineTitle>Interprocess Communication</TimelineTitle>
        <TimelineParagraph>
          <ul>
            <li>How process communicate in a system</li>
            <li>And some Leetcode</li>
          </ul>
        </TimelineParagraph>
      </TimelineComponent>
      <TimelineComponent bg>
        <TimelineTitle>Threads</TimelineTitle>
        <TimelineParagraph>
          <ul>
            <li>Finished reading about threads</li>
            <li>Div2 Codeforces contest</li>
          </ul>
        </TimelineParagraph>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent>
        <TimelineDate>July 18, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineComponent>
        <TimelineDate right>July 16, 2024</TimelineDate>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
      </TimelineMiddle>
      <TimelineComponent bg>
        <TimelineTitle>Processes</TimelineTitle>
        <TimelineParagraph>
        <ul>
            <li>Read about processes and how they function</li>
            <li>Ran through some calculus problems</li>
            <li>CSES Problemset</li>
          </ul>
        </TimelineParagraph>
      </TimelineComponent>
      <TimelineComponent bg>
        <TimelineTitle>Wrapping up the website</TimelineTitle>
        <TimelineParagraph>Deployed on GitHub Pages</TimelineParagraph>
      </TimelineComponent>
      <TimelineMiddle>
        <TimelinePoint />
        <TimelinePoint bottom />
      </TimelineMiddle>
      <TimelineComponent>
        <TimelineDate>June 16, 2024</TimelineDate>
      </TimelineComponent>
    </TimelineWrapper>
  );
};

export default Timeline;
