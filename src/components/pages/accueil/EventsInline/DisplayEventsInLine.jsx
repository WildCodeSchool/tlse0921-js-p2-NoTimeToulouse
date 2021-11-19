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
                .slice(0, 120)
                .toUpperCase()} ...`
              : event.fields.littleDescription.toUpperCase()}
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
  height: 55vh;
  border: 3px solid var(--principal-color);
  border-radius: 10px;
  @media screen and (min-width: 770px) {
    width: 60%;
    height: 50vh;
  }
`;
const TitleEvent = styled.h2`
  font-size: 2.5em;
  font-family: var(--title-font);
  width: 100%;
  text-align: center;
`;
const HeroCard = styled.div`
  width: 100%;
  height: 30%;
  color: white;
  font-weight: bold;
  background-color: var(--important-color);
  border-radius: 7px 7px 0px 0px;
  border-bottom: 3px solid var(--principal-color);
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
  border-right: 3px solid var(--principal-color);
  width: 100%;
  color: var(--principal-color);
  font-weight: bold;
  justify-content: center;
  font-size: 1.5em;
`;
const RightCard = styled.div`
  width: 100%;
  font-size: 1.8em;
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
  border-top: 3px solid var(--principal-color);
  font-size: 2.5em;
  color: var(--principal-color);
  font-weight: bold;
  font-family: var(--title-font);
  background: none;
  border-radius: 0 0 10px 10px;
  background-color: #efefef;
  &:hover {
    color: white;
    background-color: var(--secondary-color);
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
