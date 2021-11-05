import Button from '../importcomponents/button';
import Location from './Location';

const DisplayEvent = ({ events }) => (
  <div className="sampleEvent">
    {events.map((event) => (
      <div>
        <section className="describeEvent">
          <h1>{event.fields.nom_de_la_manifestation}</h1>
          <img
            src={event.fields.img}
            alt={event.fields.nom_de_la_manifestation}
            width="400"
          />
          <p>{event.fields.descriptif_long}</p>
        </section>
        <section className="detailEvent">
          <div className="infoEvent">
            <h3>Informations</h3>
            <div className="tagCategories">
              <ul>
                <li>blue</li>
                <li>Green</li>
                <li>Red</li>
              </ul>
            </div>
            <div className="describeList">
              <ul>
                <li>{event.fields.dates_affichage_horaires}</li>
                <li>
                  {event.fields.lieu_adresse_2} {event.fields.code_postal}{' '}
                  {event.fields.commune}
                </li>
                {event.fields.tarif_normal && (
                  <li>{event.fields.tarif_normal}</li>
                )}
                {event.fields.station_metro_tram_a_proximite && (
                  <li>{event.fields.station_metro_tram_a_proximite}</li>
                )}
              </ul>
            </div>
            <Location
              center={[
                event.fields.googlemap_latitude,
                event.fields.googlemap_longitude,
              ]}
              marker={[
                event.fields.googlemap_latitude,
                event.fields.googlemap_longitude,
              ]}
            />
            <div>
              <Button
                as="a"
                href="https://citymapper.com/toulouse"
                target="_blank"
              >
                Trouves ton chemin
              </Button>
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
);

export default DisplayEvent;
