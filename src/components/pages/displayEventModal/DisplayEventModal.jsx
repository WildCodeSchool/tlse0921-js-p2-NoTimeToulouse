import styled from 'styled-components';
import Location from '../evenements/Location';
import '../../../index.css';

const DisplayEventModal = ({ event, closeModal }) => (
  <BackModal>
    <SampleEvent>
      <ButtonCloseModal
        onClick={() => {
          closeModal();
        }}
      >
        <p>X</p>
      </ButtonCloseModal>
      <TitleEvent>{event.fields.name}</TitleEvent>
      <DescribeEvent>
        <ImgEvent
          src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/c105.0.414.414a/p552x414/45292619_10217685065343411_2021212850743148544_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=H35g6E4IkJMAX9axd5g&tn=J4RtpVHgSOjpxaCr&_nc_ht=scontent-cdt1-1.xx&oh=13587d2959f7382340a17cd5874f2194&oe=61AB59C3"
          alt="minautaure au capitole"
        />
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
`;

const ButtonCloseModal = styled.button`
  margin: 20px;
  cursor: pointer;
  background: none;
  border: none;

  p {
    size: 40px;
  }
`;

const SampleEvent = styled.div`
  width: 100%;
  top: 15%;
  background-color: var(--light-color);
  border-radius: 10px;
  z-index: 500;
  cursor: default;
  @media (min-width: 480px) {
    width: 80%;
  }
`;

const TitleEvent = styled.h1`
  text-align: center;
  font-size: 3.5em;
  font-style: bold;
`;

const Button = styled.button`
  color: var(--dark-color);
  font-size: 4em;
  width: 50%;
  background-color: var(--secondary-color);
  border-radius: 5px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 600px) {
    width: 20%;
  }
`;

const DescribeEvent = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
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

  @media screen and (min-width: 480px) {
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
  font-weight: bold;
  font-size: 16px;
  background-color: var(--secondary-color);
  padding: 0.5em;
  border-radius: 5px;
`;
