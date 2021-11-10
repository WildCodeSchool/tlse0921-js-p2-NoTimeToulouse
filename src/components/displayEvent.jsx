import Button from '../importcomponents/button';
import Location from './Location';
import '../index.css';

const DisplayEvent = ({ events }) => (
  <div className="sampleEvent">
    {events.map((event) => (
      <div>
        <h1>{event.fields.name}</h1>
        <section className="describeEvent">
          <img
            src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/c105.0.414.414a/p552x414/45292619_10217685065343411_2021212850743148544_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=da31f3&_nc_ohc=H35g6E4IkJMAX9axd5g&tn=J4RtpVHgSOjpxaCr&_nc_ht=scontent-cdt1-1.xx&oh=13587d2959f7382340a17cd5874f2194&oe=61AB59C3"
            alt="minautaure au capitole"
          />
          <div className="longDescription">
            <p>{event.fields.longDescription}</p>
          </div>
        </section>
        <section className="detailEvent">
          <div className="infoEvent">
            <div className="infoCard">
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
            </div>
            <div id="map">
              <Location
                marker={[event.fields.geoPoint]}
                adress={event.fields.adress}
              />
            </div>
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
        </section>
      </div>
    ))}
  </div>
);

export default DisplayEvent;
