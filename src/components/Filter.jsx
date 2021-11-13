import React, { useState, useEffect } from 'react';

// fonction filter qui sera activé dans des boutons avec des noms de tags//
function Filter({ setFilterValue }) {
  const [filteredCinema, setFilterCinema] = useState(false);
  const [filteredMusique, setFilterMusique] = useState(false);
  const [filteredArt, setFilterArt] = useState(false);
  const [filteredSport, setFilterSport] = useState(false);

  function handleFilterCinema() {
    setFilterCinema(!filteredCinema);
  }
  function handleFilterMusique() {
    setFilterMusique(!filteredMusique);
  }
  function handleFilterArt() {
    setFilterArt(!filteredArt);
  }
  function handleFilterSport() {
    setFilterSport(!filteredSport);
  }
  useEffect(() => {
    if (filteredCinema) {
      setFilterValue('Cinéma');
    } else if (filteredMusique) {
      setFilterValue('Musique');
    } else if (filteredSport) {
      setFilterValue('Sports');
    } else if (filteredArt) {
      setFilterValue('Art');
    }

    return () => setFilterValue('Impossiblequecelaysoit');
  }, [filteredCinema, filteredMusique, filteredArt, filteredSport]);

  return (
    <div>
      <button type="button" onClick={handleFilterCinema}>
        Cinéma
      </button>
      <button type="button" onClick={handleFilterMusique}>
        Musique
      </button>
      <button type="button" onClick={handleFilterArt}>
        Art
      </button>
      <button type="button" onClick={handleFilterSport}>
        Sport
      </button>
    </div>
  );
}
export default Filter;
