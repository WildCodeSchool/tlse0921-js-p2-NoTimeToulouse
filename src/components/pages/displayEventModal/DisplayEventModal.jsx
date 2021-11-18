import styled from 'styled-components';
import Location from '../evenements/Location';
import '../../../index.css';
import FetchApiUnsplash from '../../api/FetchApiUnsplash';

const DisplayEventModal = ({ event, closeModal, openModal }) => {
  let imgUrl = '';

  if (
    event.fields.eventCategory
    && event.fields.eventCategory.includes('Concert')
  ) {
    imgUrl = FetchApiUnsplash('Concert').urlImg;
  } else if (
    event.fields.eventCategory
    && event.fields.eventCategory.includes('Cinéma')
  ) {
    imgUrl = FetchApiUnsplash('cinema').urlImg;
  } else if (
    event.fields.eventCategory
    && event.fields.eventCategory.includes('Exposition')
  ) {
    imgUrl = FetchApiUnsplash('exposition').urlImg;
  } else if (
    event.fields.eventCategory
    && event.fields.eventCategory.includes('Art')
  ) {
    imgUrl = FetchApiUnsplash('art').urlImg;
  } else {
    imgUrl = FetchApiUnsplash('toulouse').urlImg;
  }
  return (
    <BackModal
      onClick={() => {
        closeModal();
      }}
    >
      <SampleEvent
        onClick={() => {
          openModal();
        }}
      >
        <ButtonCloseModal
          onClick={() => {
            closeModal();
          }}
        >
          X
        </ButtonCloseModal>
        <TitleEvent>{event.fields.name}</TitleEvent>
        <DescribeEvent>
          <ImgEvent src={imgUrl} />
          <LongDescription>{event.fields.longDescription}</LongDescription>
        </DescribeEvent>
        <DetailEvent>
          <InfoEvent>
            <InfoCard>
              <DescribeList className="describeList">
                <ul>
                  <li>{event.fields.dates}</li>
                  <li>
                    {event.fields.adress} {event.fields.zipCode}{' '}
                    {event.fields.city}
                  </li>
                  {event.fields.price && <li>{event.fields.price}</li>}
                  {event.fields.access && <li>{event.fields.access}</li>}
                </ul>
              </DescribeList>
            </InfoCard>
            <Location
              marker={[event.fields.geoPoint]}
              adress={event.fields.adress}
            />
          </InfoEvent>
          <Button as="a" href="https://citymapper.com/toulouse" target="_blank">
            Trouves ton chemin
          </Button>
        </DetailEvent>
      </SampleEvent>
    </BackModal>
  );
};

export default DisplayEventModal;

const BackModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(14, 19, 31, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  overflow: scroll;
  cursor: pointer;
`;

const ButtonCloseModal = styled.button`
  margin: 20px;
  size: 3em;
  cursor: pointer;
`;

const SampleEvent = styled.div`
  width: 100%;
  height: 100vh;
  top: 15%;
  background-color: #86bbd8;
  border-radius: 10px;
  z-index: 500;
  cursor: default;
  @media (min-width: 480px) {
    width: 80%;
  }
`;

const TitleEvent = styled.h1`
  font-family: var(--title-font);
  text-align: center;
  font-size: 3.5em;
  font-style: bold;
`;

const Button = styled.button`
  color: var(--secondary-color);
  font-size: 4em;
  width: 50%;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 600px) {
    width: 20%;
  }
`;

const DescribeEvent = styled.section`
  font-family: var(--text-font);
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  font-style: bold;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImgEvent = styled.img`
  display: flex;
  align-items: center;
  margin-left: 5px;
  border-radius: 10px;

  @media screen and (min-width: 600px) {
  }
`;

const LongDescription = styled.p`
  text-align: justify;
  margin: 2em;
`;

const DetailEvent = styled.section``;
const InfoEvent = styled.section``;

const InfoCard = styled.section`
  display: flex;
  justify-content: flex-end;
  text-align: center;
`;
const DescribeList = styled.section`
  font-family: var(--text-font);
  font-weight: bold;
  font-size: 16px;
`;
