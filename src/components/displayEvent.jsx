import styled from 'styled-components';
import Location from './Location';
import '../index.css';

const DisplayEvent = ({ event }) => {
  const {
    nom_de_la_manifestation: name,
    dates_affichage_horaires: dates,
    descriptif_long: longDescription,
    commune: city,
    station_metro_tram_a_proximite: access,
    geo_point: geoPoint /* [Lat, Long] */,
    tarif_normal: price,
    lieu_adresse_2: adress,
    code_postal: zipCode,
  } = event.fields;

  const TitleEvent = styled.h1`
    text-align: center;
    color: blue;
  `;

  const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const DescibeEvent = styled.section``;

  const LongDescription = styled.p``;

  const DetailEvent = styled.section``;
  const InfoEvent = styled.section``;

  const InfoCard = styled.section``;
  const TagCategory = styled.section``;
  const DescribeList = styled.section``;
  return (
    <div className="sampleEvent">
      <TitleEvent>{name}</TitleEvent>
      <DescibeEvent>
        <img
          src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/c105.0.414.414a/p552x414/45292619_10217685065343411_2021212850743148544_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=H35g6E4IkJMAX9axd5g&tn=J4RtpVHgSOjpxaCr&_nc_ht=scontent-cdt1-1.xx&oh=13587d2959f7382340a17cd5874f2194&oe=61AB59C3"
          alt="minautaure au capitole"
        />
        <LongDescription>{longDescription}</LongDescription>
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
                <li>{dates}</li>
                <li>
                  {adress} {zipCode} {city}
                </li>
                {price && <li>{price}</li>}
                {access && <li>{access}</li>}
              </ul>
            </DescribeList>
          </InfoCard>
          <Location marker={[geoPoint]} adress={adress} />
        </InfoEvent>
        <Button as="a" href="https://citymapper.com/toulouse" target="_blank">
          Trouves ton chemin
        </Button>
      </DetailEvent>
    </div>
  );
};

export default DisplayEvent;
