import React from 'react';

const Card = ({ event }) => {
  const {
    nom_de_la_manifestation: name,
    descriptif_court: description,
    dates_affichage_horaire: date,
    commune: locality,
    categorie_de_la_manifestation: category,
    reservation_email: bookingMail,
  } = event.fields;
  return (
    <div className="card">
      <div>
        <h2>{name}</h2>
        <div className="description">
          <p>{description}</p>
        </div>
        <ul className="infospratiques">
          {date && <li>{date}</li>}
          {locality && <li>{locality}</li>}
          {category && <li>{category}</li>}
          {bookingMail && <li>{bookingMail}</li>}
        </ul>
      </div>
    </div>
  );
};
export default Card;
