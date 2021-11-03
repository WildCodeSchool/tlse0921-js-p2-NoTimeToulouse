import React from 'react';

const Card = ({ event }) => (
  <div className="card">
    <div>
      <h2>{event.fields.nom_de_la_manifestation}</h2>
      <div className="description">
        <p>{event.fields.descriptif_court}</p>
      </div>
      <ul className="infospratiques">
        <li>{event.fields.dates_affichage_horaire}</li>
        <li>{event.fields.commune}</li>
        <li>{event.fields.categorie_de_la_manifestation}</li>
        <li>{event.fields.reservation_email}</li>
      </ul>
    </div>
  </div>
);
export default Card;
