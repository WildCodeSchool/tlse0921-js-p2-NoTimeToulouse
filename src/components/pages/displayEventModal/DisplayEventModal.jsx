import styled from 'styled-components';
import Location from '../evenements/Location';
import '../../../index.css';

const DisplayEventModal = ({ event, closeModal }) => (
  <SampleEvent>
    <TitleEvent>{event.fields.name}</TitleEvent>
    <DescibeEvent>
      <ImgEvent
        src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/c105.0.414.414a/p552x414/45292619_10217685065343411_2021212850743148544_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=H35g6E4IkJMAX9axd5g&tn=J4RtpVHgSOjpxaCr&_nc_ht=scontent-cdt1-1.xx&oh=13587d2959f7382340a17cd5874f2194&oe=61AB59C3"
        alt="minautaure au capitole"
      />
      <LongDescription>{event.fields.longDescription}</LongDescription>
    </DescibeEvent>
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
      <Button
        onClick={() => {
          closeModal();
        }}
      >
        X
      </Button>
    </DetailEvent>
  </SampleEvent>
);

export default DisplayEventModal;

const SampleEvent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleEvent = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  @media screen and (min-width: 600px) {
    width: 20%;
  }
`;

const DescibeEvent = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImgEvent = styled.img`
  display: flex;
  align-items: center;

  @media screen and (min-width: 600px) {
    height: 400px;
    width: 400px;
  }
`;

const LongDescription = styled.p`
  text-align: justify;
  margin: 2em;
`;

const DetailEvent = styled.section``;
const InfoEvent = styled.section`
  display: flex;
  justify-content: center;
`;

const InfoCard = styled.section``;
const TagCategory = styled.section``;
const DescribeList = styled.section``;
