import React from 'react';
import styled from 'styled-components';
import timelineData from '../data/timelineData.json';

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
    width: 5px;
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
    margin: 30px 15px 0 15px;
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
    // padding: 10px 10px 10px 10px;
    padding: ${({ bg }) => (bg ? '0' : '0')};
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
    margin: -5px;
  }
`;

const TimelineTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 1100px) {
    font-size: 12px;
    margin: 8px;
  }
`;

const TimelineParagraph = styled.p`
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  line-height: 1;
  margin-left: -10px;
  margin-right: 3px;
  
  @media (max-width: 1100px) {
    font-size: 11px;
  }
`;

const Timeline = () => {
  return (
    <TimelineWrapper>
      {timelineData && timelineData.length > 0 ? (
        timelineData.map((dayEntry, dayIndex) => (
          <React.Fragment key={dayIndex}>
            {/* Date on left or right */}
            <TimelineComponent>
              <TimelineDate right={dayEntry.align === 'right'}>
                {dayEntry.date}
              </TimelineDate>
            </TimelineComponent>

            {/* Middle line with point */}
            <TimelineMiddle>
              <TimelinePoint />
            </TimelineMiddle>

            {/* Entries for this date */}
            {dayEntry.entries && dayEntry.entries.length > 0 ? (
              dayEntry.entries.map((entry, entryIndex) => (
                <TimelineComponent key={entryIndex} bg>
                  <TimelineTitle>{entry.title}</TimelineTitle>
                  <TimelineParagraph>
                    <ul>
                      {entry.items && entry.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </TimelineParagraph>
                </TimelineComponent>
              ))
            ) : (
              <TimelineComponent>
                <TimelineParagraph>No entries for this date</TimelineParagraph>
              </TimelineComponent>
            )}
          </React.Fragment>
        ))
      ) : (
        <TimelineComponent>
          <TimelineParagraph>No timeline data available</TimelineParagraph>
        </TimelineComponent>
      )}

      {/* End point */}
      <TimelineMiddle>
        <TimelinePoint bottom />
      </TimelineMiddle>
    </TimelineWrapper>
  );
};

export default Timeline;
