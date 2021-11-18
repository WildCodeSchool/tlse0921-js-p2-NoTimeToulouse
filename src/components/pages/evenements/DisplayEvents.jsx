import { useState } from 'react';
import styled from 'styled-components';
import DisplayEventModal from '../displayEventModal/DisplayEventModal';

const DisplayEvents = ({ eventsToDisplay }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  function openEventDetails(event) {
    setSelectedEvent(event);
    setOpenModal(true);
  }

  return (
    <ContainerCards>
      {eventsToDisplay.map((event) => (
        <EventCard>
          <MainContainer>
            <CardsTitle>{event.fields.name}</CardsTitle>
            <ShortDescription>
              <div className="description">
                {event.fields.littleDescription.length > 100 ? (
                  <p>{`${event.fields.littleDescription.slice(0, 500)} ...`}</p>
                ) : (
                  <p>{event.fields.littleDescription}</p>
                )}
              </div>
            </ShortDescription>
            <CardFooter>
              <ListInfoCard className="infospratiques">
                {event.fields.dates && <li>{event.fields.dates}</li>}
                {event.fields.city && <li>{event.fields.city}</li>}
                {event.fields.eventTheme && <li>{event.fields.eventTheme}</li>}
                {event.fields.price && <li>{event.fields.price}</li>}
              </ListInfoCard>
              <ButtonOpenEvent onClick={() => openEventDetails(event)}>
                Voir plus
              </ButtonOpenEvent>
            </CardFooter>
          </MainContainer>
        </EventCard>
      ))}
      {openModal && (
        <DisplayEventModal
          event={selectedEvent}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </ContainerCards>
  );
};

export default DisplayEvents;

const EventCard = styled.div`
  box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff3f0;
  @media (min-width: 480px) {
    width: 80%;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }
`;
const MainContainer = styled.div`
  font-family: var(--text-font);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
`;

const CardsTitle = styled.h2`
  padding-inline: 0.5em;
  font-family: var(--title-font);
  font-size: 25px;
  text-align: center;
`;

const ShortDescription = styled.div`
  width: 90%;
  font-size: 16px;
  .description {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 0.8em;
`;
const ListInfoCard = styled.ul`
  text-align: center;
  margin-left: 16px;
  list-style-type: none;
  background: #ff9f1c;
  width: 50%;
  font-size: 12px;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  @media (min-width: 480px) {
    font-size: 16px;
  }
`;
const ButtonOpenEvent = styled.button`
  padding: 0.5em;
  margin-right: 16px;
  height: 30%;
  width: 30%;
  font-size: 16px;
  border: 2px solid var(--important-color);
  border-radius: 5px;
  color: var(--light-color);
  background-color: var(--important-color);
  font-weight: bold;
`;
