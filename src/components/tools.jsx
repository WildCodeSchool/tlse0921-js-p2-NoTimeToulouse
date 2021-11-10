// Fichier pour les outils que l'on va utiliser dans le projet et que l'on peut externaliser
import styled from 'styled-components';

const SearchDiv = styled.div`
  width: 100%;
  margin: 10% 0 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const MyInput = styled.input`
  width: 50%;
  padding: 0.3em;
  border-radius: 0.5rem;
  font-size: 20px;
`;
const SearchButton = styled.button`
  position: absolute;
  height: 50%;
  right: 0;
`;

export default function SearchEvents({
  searchValue,
  handleChangeSearch,
  handleIsChanged,
}) {
  return (
    <SearchDiv>
      <MyInput
        type="text"
        placeholder="rechercher"
        value={searchValue}
        onChange={(e) => handleChangeSearch(e.target.value)}
      />
      <SearchButton type="submit" onClick={() => handleIsChanged(true)}>
        Search
      </SearchButton>
    </SearchDiv>
  );
}
