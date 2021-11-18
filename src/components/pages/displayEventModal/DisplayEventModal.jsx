import styled from 'styled-components';
import FetchApiUnsplash from '../../api/FetchApiUnsplash';
import Location from '../evenements/Location';
import '../../../index.css';

const DisplayEventModal = ({ event, closeModal }) => {
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
    <BackModal>
      <SampleEvent>
        <HeadEvent>
          <ButtonCloseModal
            onClick={() => {
              closeModal();
            }}
          >
            <div>X</div>
          </ButtonCloseModal>
          <TitleEvent>{event.fields.name}</TitleEvent>
        </HeadEvent>
        <DescribeEvent>
          <ImgEvent src={imgUrl} alt="un évènement" />
          <LongDescription>{event.fields.longDescription}</LongDescription>
        </DescribeEvent>
        <DetailEvent>
          <div className="aside">
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
            <ButtonWay
              as="a"
              href="https://citymapper.com/toulouse"
              target="_blank"
            >
              Comment s&apos; y rendre ？
            </ButtonWay>
          </div>
          <div className="map">
            <Location
              marker={[event.fields.geoPoint]}
              adress={event.fields.adress}
            />
          </div>
        </DetailEvent>
      </SampleEvent>
    </BackModal>
  );
};

export default DisplayEventModal;

const BackModal = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  background-color: rgba(14, 19, 31, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const ButtonCloseModal = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 25px;
  font-weight: bold;
  flex-basis: 50px;
`;

const SampleEvent = styled.div`
  overflow-y: scroll;
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: white;
  border-radius: 10px;
  z-index: 500;
  cursor: default;
  @media (min-width: 480px) {
    width: 80%;
  }

  .leaflet-container {
    height: 250px;
    flex-basis: auto;
    border-radius: 5px;
  }
`;

const HeadEvent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const TitleEvent = styled.h1`
  padding: 0.5em 0;
  font-family: var(--title-font);
  font-size: 3.5em;
  font-style: bold;
  margin: auto;
`;

const ImgEvent = styled.img`
  width: auto;
  height: 300px;
  border-radius: 10px;
`;

const DescribeEvent = styled.section`
  font-family: var(--text-font);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.3em;
  font-style: bold;
  padding: 1em;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

const LongDescription = styled.p`
  margin: 0;
  text-align: justify;
  width: 100%;
`;

const DetailEvent = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .aside {
    flex-direction: column;
    text-align: center;
  }

  .map {
    width: 100%;
  }
`;

const DescribeList = styled.section`
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  font-family: var(--text-font);

  li {
    padding: 0.5em;
  }
`;

const ButtonWay = styled.button`
  width: auto;
  color: var(--dark-color);
  font-weight: bold;
  border-radius: 5px;
  border: 2px solid var(--important-color);
  font-size: 2em;
`;
