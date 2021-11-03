import Button from '../importcomponents/button';

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
                <li>{event.fields.station_metro_tram_a_proximite}</li>
                <li>{event.fields.dates_affichage_horaires}</li>
              </ul>
            </div>
            <div className="eventMap">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.9382793409778!2d1.444537678985124!3d43.60426057910968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb620f0de75f%3A0xede79dda35ac152d!2sH%C3%B4tel%20de%20Ville%20de%20Toulouse!5e0!3m2!1sfr!2sfr!4v1635777390452!5m2!1sfr!2sfr"
                width="600"
                height="450"
                loading="lazy"
              />
            </div>
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
