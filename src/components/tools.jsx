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
  font-size: 20px;
`;
// const SearchButton = styled.span`
//   position: absolute;
//   height: 50%;
//   width: 10%;
//   right: 0;
//   background-color: blue;
// `;
const MyWen = styled.img`
  position: absolute;
  width: 5%;
  right: 25%;
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
      <MyWen src={wen} type="submit" onClick={() => handleIsChanged(true)} />
    </SearchDiv>
  );
}
