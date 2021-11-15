// Fichier pour les outils que l'on va utiliser dans le projet et que l'on peut externaliser
import styled from 'styled-components';
import wen from './assets/search-solid.svg';

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
  border: solid #f06e96 3px;
  font-size: 20px;
  background-color: whitesmoke;
  &::placeholder {
    color: #f06e96;
    opacity: 60%;
  }
`;
const MyWen = styled.img`
  position: absolute;
  width: 5%;
  right: 25%;
  filter: invert(100%) sepia(100%) saturate(200%) hue-rotate(100deg)
    brightness(100%) contrast(60%);
  cursor: pointer;
`;

export default function SearchEvents({
  searchValue,
  setSearchValue,
  setSendSearch,
}) {
  return (
    <SearchDiv>
      <MyInput
        type="text"
        placeholder="rechercher"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <MyWen src={wen} type="submit" onClick={() => setSendSearch(true)} />
    </SearchDiv>
  );
}