import styled from 'styled-components';
// import fetchApiUnsplash from '../../../api/FetchApiUnsplash';

const DisplayEventsInLine = ({ eventsToDisplay }) => (
  <EventContainer>
    {eventsToDisplay.map((event) => (
      <CardEvent>
        <TitleEvent>{event.fields.name}</TitleEvent>
        <EventLogo />
        <HeroCard />
        <MainCard>
          <LeftCard />
          <RightCard />
        </MainCard>
      </CardEvent>
    ))}
  </EventContainer>
);

const EventContainer = styled.div`
  display: flex;
  width: 400%;
`;
const CardEvent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  margin-right: 2em;
  width: 40%;
  height: 50vh;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
`;
const TitleEvent = styled.h2`
  position: absolute;
  font-size: 1.5em;
  top: 0;
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 30%);
`;
const HeroCard = styled.img`
  width: 100;
  height: 45%;
  background-color: pink;
  border-radius: 10px;
  box-shadow: 0px 16px 21px -6px rgba(0, 0, 0, 0.4);
`;
const EventLogo = styled.img`
  position: absolute;
  top: 35%;
  left: 40%;
  width: 60px;
  height: 60px;
  background-color: whitesmoke;
  border-radius: 100%;
  box-shadow: 0px 16px 21px -6px rgba(0, 0, 0, 0.4);
`;
const MainCard = styled.div`
  height: 45%;
  width: 100%;
`;
const LeftCard = styled.div`
  width: 100%;
  background-color: green;
`;
const RightCard = styled.div`
  width: 100%;
  background-color: grey;
`;

export default DisplayEventsInLine;
