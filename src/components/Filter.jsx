import React, { useState, useEffect } from 'react';

// fonction filter qui sera activé dans des boutons avec des noms de tags//
function Filter({ setFilterValue }) {
  const [filteredCinema, setFilterCinema] = useState(false);
  const [filteredMusique, setFilterMusique] = useState(false);
  const [filteredExposition, setFilterExposition] = useState(false);
  const [filteredFoire, setFilterFoire] = useState(false);

  function handleFilterCinema() {
    setFilterCinema(!filteredCinema);
  }
  function handleFilterMusique() {
    setFilterMusique(!filteredMusique);
  }
  function handleFilterExposition() {
    setFilterExposition(!filteredExposition);
  }
  function handleFilterFoire() {
    setFilterFoire(!filteredFoire);
  }
  useEffect(() => {
    if (filteredCinema) {
      setFilterValue('Cinéma');
    } else if (filteredMusique) {
      setFilterValue('Musique');
    } else if (filteredFoire) {
      setFilterValue('Foire');
    } else if (filteredExposition) {
      setFilterValue('Exposition');
    }

    return () => setFilterValue('Impossiblequecelaysoit');
  }, [filteredCinema, filteredMusique, filteredExposition, filteredFoire]);

  return (
    <div>
      <button type="button" onClick={handleFilterCinema}>
        Cinéma
      </button>
      <button type="button" onClick={handleFilterMusique}>
        Musique
      </button>
      <button type="button" onClick={handleFilterExposition}>
        Exposition
      </button>
      <button type="button" onClick={handleFilterFoire}>
        Foire et salons
      </button>
    </div>
  );
}
export default Filter;
