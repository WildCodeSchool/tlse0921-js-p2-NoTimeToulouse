import styled from 'styled-components';
// import fetchApiUnsplash from '../../../api/FetchApiUnsplash';

const DisplayEventsInLine = ({ eventsToDisplay }) => (
  <EventContainer>
    {eventsToDisplay.map((event) => (
      <CardEvent>
        <HeroCard>
          <TitleEvent>{event.fields.name}</TitleEvent>
          <City>{event.fields.city}</City>
        </HeroCard>
        <MainCard>
          <LeftCard>{event.fields.dates}</LeftCard>
          <RightCard>
            {event.fields.price ? event.fields.price : <p>Free</p>}
          </RightCard>
        </MainCard>
        <FooterCard>
          <ButtonModal>Voir plus</ButtonModal>
        </FooterCard>
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
  justify-content: space-between;
  margin-left: 0.5em;
  margin-right: 2em;
  width: 40%;
  height: 50vh;
  border: 1px solid grey;
  border-radius: 10px;
`;
const TitleEvent = styled.h2`
  font-size: 2em;
  font-family: var(--title-font);
  width: 100%;
  text-align: center;
`;
const HeroCard = styled.div`
  width: 100;
  height: 30%;
  background-color: #efefef;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const MainCard = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
`;
const LeftCard = styled.div`
  width: 100%;
  background-color: green;
`;
const RightCard = styled.div`
  width: 100%;
  background-color: grey;
`;
const City = styled.p`
  font-size: 1.6em;
  font-family: var(--text-font);
`;
const FooterCard = styled.div`
  width: 100%;
  height: 20%;
`;
const ButtonModal = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 2em;
  font-family: var(--text-font);
  background: none;
  border-radius: 0 0 10px 10px;
  background-color: var(--secondary-color);
  &:hover {
    background-color: var(--secondary-color-light);
  }
`;
export default DisplayEventsInLine;
