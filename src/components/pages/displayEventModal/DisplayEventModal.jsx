import styled from 'styled-components';
import Location from '../evenements/Location';
import '../../../index.css';

const DisplayEventModal = ({ event, closeModal }) => (
  <SampleEvent>
    <ButtonCloseModal
      onClick={() => {
        closeModal();
      }}
    >
      X
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
          <h3>Informations</h3>
          <TagCategory className="tagCategories">
            <ul>
              <li>blue</li>
              <li>Green</li>
              <li>Red</li>
            </ul>
          </TagCategory>
          <DescribeList className="describeList">
            <ul>
              <li>{event.fields.dates}</li>
              <li>
                {event.fields.adress} {event.fields.zipCode} {event.fields.city}
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
);

export default DisplayEventModal;

const ButtonCloseModal = styled.button`
  background-color: red;
`;

const SampleEvent = styled.div`
  background-color: #86bbd8;
  position: absolute;
  width: 80px;
  border-radius: 10px;
  @media (min-width: 480px) {
    width: 100%;
  }
`;

const TitleEvent = styled.h1`
  text-align: center;
  font-size: bold;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  @media screen and (min-width: 600px) {
    width: 20%;
  }
`;

const DescribeEvent = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 25px;
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
const TagCategory = styled.section``;

const DescribeList = styled.section`
  font-weight: bold;
  font-size: 16px;
`;
