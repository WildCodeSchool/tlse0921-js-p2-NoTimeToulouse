import Button from '../importcomponents/button';
import Location from './Location';
import '../index.css';

const DisplayEvent = ({ events }) => (
  <div className="sampleEvent">
    {events.map((event) => (
      <div>
        <section className="describeEvent">
          <h1>{event.fields.name}</h1>
          <p>{event.fields.longDescription}</p>
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
                <li>{event.fields.dates}</li>
                <li>
                  {event.fields.adress} {event.fields.zipCode}{' '}
                  {event.fields.city}
                </li>
                {event.fields.price && <li>{event.fields.price}</li>}
                {event.fields.access && <li>{event.fields.access}</li>}
              </ul>
            </div>
            <div id="map">
              <Location marker={[event.fields.geoPoint]} />
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
