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
          <ImgEvent />
          <MainContainer>
            <CardsTitle>{event.fields.name}</CardsTitle>
            <div className="description">
              {event.fields.littleDescription.length > 100 ? (
                <p>{`${event.fields.littleDescription.slice(0, 100)} ...`}</p>
              ) : (
                <p>{event.fields.littleDescription}</p>
              )}
            </div>
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

const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
`;
const EventCard = styled.div`
  box-shadow: 0px 0px 29px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin-top: 2em;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MainContainer = styled.div`
  font-family: var(--text-font);
  width: 63%;
  font-size: 0.8em;
  padding: 1em;
`;
const ImgEvent = styled.div`
  width: 30%;
  height: 150px;
  border-radius: 10px 0px 0px 10px;
  background-color: lightgreen;
`;
const ListInfoCard = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const CardsTitle = styled.h2`
  font-family: var(--title-font);
  font-size: 1.2em;
`;
const ButtonOpenEvent = styled.button`
  padding: 0.5em;
  height: 50%;
  font-size: 1em;
  border: 2px solid var(--important-color);
  border-radius: 5px;
  color: var(--light-color);
  background-color: var(--important-color);
`;
const CardFooter = styled.div`
  display: flex;
  font-size: 0.8em;
  justify-content: space-between;
  align-items: end;
`;
