import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DisplayEventsInLine = ({ eventsToDisplay }) => (
  <EventContainer>
    {eventsToDisplay.map((event) => (
      <CardEvent>
        <HeroCard>
          <TitleEvent>{event.fields.name}</TitleEvent>
          <City>{event.fields.city}</City>
        </HeroCard>
        <MainCard>
          <LeftCard>
            <Date>
              <div>
                {event.fields.dates.slice(3, 6).replace('/', ' ')}
                {event.fields.dates.slice(6, 8)}
              </div>
              <div>{event.fields.dates.slice(9, 13)}</div>
            </Date>
            <p className="price">
              Prix : {event.fields.price ? event.fields.price : 'Free'}
            </p>
          </LeftCard>
          <RightCard>
            {event.fields.littleDescription.length > 150
              ? `${event.fields.littleDescription
                .slice(0, 150)
                .toUpperCase()} ...`
              : event.fields.littleDescription}
          </RightCard>
        </MainCard>
        <FooterCard>
          <Link to="/evenements">
            <ButtonModal>Voir plus</ButtonModal>
          </Link>
        </FooterCard>
      </CardEvent>
    ))}
  </EventContainer>
);

const EventContainer = styled.div`
  display: flex;
  width: 400%;
  @media screen and (min-width: 600px) {
    width: 200%;
  }
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
  @media screen and (min-width: 770px) {
    width: 60%;
    height: 50vh;
  }
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
  display: flex;
  padding: 1em;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid grey;
  width: 100%;
  color: var(--principal-color);
  font-weight: bold;
  justify-content: center;
  font-size: 1.5em;
`;
const RightCard = styled.div`
  width: 100%;
  font-size: 1.6em;
  padding: 1em;
  font-family: var(--text-font);
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
  font-size: 2.5em;
  color: white;
  font-weight: bold;
  font-family: var(--title-font);
  background: none;
  border-radius: 0 0 10px 10px;
  background-color: var(--secondary-color);
  &:hover {
    background-color: var(--secondary-color-light);
    cursor: pointer;
  }
`;
const Date = styled.div`
  color: var(--secondary-color);
  font-weight: bold;
  justify-content: center;
  font-size: 3em;
`;
export default DisplayEventsInLine;
