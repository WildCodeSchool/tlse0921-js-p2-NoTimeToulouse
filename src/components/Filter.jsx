import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// fonction filter qui sera activé dans des boutons avec des noms de tags//

function Filter({ setFilterValue }) {
  const [filteredCinema, setFilterCinema] = useState(false);
  const [filteredMusique, setFilterMusique] = useState(false);
  const [filteredArt, setFilterArt] = useState(false);
  const [filteredSport, setFilterSport] = useState(false);

  const handleFilterCinema = () => {
    setFilterCinema(!filteredCinema);
    setFilterMusique(false);
    setFilterSport(false);
    setFilterArt(false);
  };
  const handleFilterMusique = () => {
    setFilterMusique(!filteredMusique);
    setFilterCinema(false);
    setFilterSport(false);
    setFilterArt(false);
  };
  const handleFilterSport = () => {
    setFilterSport(!filteredSport);
    setFilterCinema(false);
    setFilterArt(false);
    setFilterMusique(false);
  };
  const handleFilterArt = () => {
    setFilterArt(!filteredArt);
    setFilterCinema(false);
    setFilterMusique(false);
    setFilterSport(false);
  };

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
    <QuickSearchContainer>
      <QuickSearchButton
        type="button"
        value="Cinéma"
        onClick={handleFilterCinema}
        isClicked={filteredCinema}
      />
      <QuickSearchButton
        type="button"
        onClick={handleFilterMusique}
        value="Musique"
        isClicked={filteredMusique}
      />
      <QuickSearchButton
        type="button"
        onClick={handleFilterArt}
        value="Art"
        isClicked={filteredArt}
      />
      <QuickSearchButton
        type="button"
        onClick={handleFilterSport}
        value="Sport"
        isClicked={filteredSport}
      />
    </QuickSearchContainer>
  );
}

const QuickSearchButton = styled.input`
  width: 20%;
  height: 50px;
  color: ${({ isClicked }) => (isClicked ? 'white' : 'var(--important-color)')};
  font-weight: bold;
  border-radius: 5px;
  border: var(--important-color) solid 3px;
  background-color: ${({ isClicked }) => (isClicked ? 'var(--important-color)' : 'white')};
`;
const QuickSearchContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: space-around;
`;

export default Filter;
