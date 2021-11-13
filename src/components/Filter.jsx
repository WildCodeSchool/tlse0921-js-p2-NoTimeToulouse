import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// fonction filter qui sera activé dans des boutons avec des noms de tags//

const QuickSearchButton = styled.input`
  width: 20%;
  height: 50px;
`;
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

function Filter({ setFilterValue }) {
  const [filteredCinema, setFilterCinema] = useState(false);
  const [filteredMusique, setFilterMusique] = useState(false);
  const [filteredArt, setFilterArt] = useState(false);
  const [filteredSport, setFilterSport] = useState(false);

  const handleFilterCinema = () => {
    setFilterCinema(!filteredCinema);
  };
  const handleFilterMusique = () => {
    setFilterMusique(!filteredMusique);
  };
  const handleFilterSport = () => {
    setFilterSport(!filteredSport);
  };
  const handleFilterArt = () => {
    setFilterArt(!filteredArt);
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
    <SearchContainer>
      <QuickSearchButton
        type="button"
        value="Cinéma"
        onClick={handleFilterCinema}
      />
      <QuickSearchButton
        type="button"
        onClick={handleFilterMusique}
        value="Musique"
      />
      <QuickSearchButton type="button" onClick={handleFilterArt} value="Art" />
      <QuickSearchButton
        type="button"
        onClick={handleFilterSport}
        value="Sport"
      />
    </SearchContainer>
  );
}
export default Filter;
