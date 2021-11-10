import React, { useState, useEffect } from 'react';

// fonction filter qui sera activé dans des boutons avec des noms de tags//
function Filter({ filterValue, setFilterValue }) {
  const [filteredCinema, setFilterCinema] = useState(false);
  const [filteredMusique, setFilterMusique] = useState(false);
  const [filteredExposition, setFilterExposition] = useState(false);
  const [filteredFoire, setFilterFoire] = useState(false);
  console.log(filterValue);

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
  }, [filteredCinema, filteredMusique, filteredExposition, filteredFoire]);

  return (
    <div>
      <button type="button" onClick={handleFilterCinema}>
        Cinéma {filteredCinema ? 'ON' : 'OFF'}
      </button>
      <button type="button" onClick={handleFilterMusique}>
        Musique {filteredMusique ? 'ON' : 'OFF'}
      </button>
      <button type="button" onClick={handleFilterExposition}>
        Exposition {filteredExposition ? 'ON' : 'OFF'}
      </button>
      <button type="button" onClick={handleFilterFoire}>
        Foire et salons {filteredFoire ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
export default Filter;
