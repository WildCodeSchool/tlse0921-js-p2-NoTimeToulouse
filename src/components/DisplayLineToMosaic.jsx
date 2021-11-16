import React from 'react';
import styled from 'styled-components';

const MosaicButton = (props) => {
  const { toMosaic, handleDisplayClick } = props;
  return (
    <MosaicButtonContainer>
      <LineToMosaicButton type="button" onClick={handleDisplayClick}>
        Affichage {toMosaic ? 'en ligne' : 'en mosaïque'}
      </LineToMosaicButton>
    </MosaicButtonContainer>
  );
};

export default MosaicButton;

const LineToMosaicButton = styled.input`
  width: 20%;
  height: 50px;
  color: var(--important-color);
  font-weight: bold;
  border-radius: 5px;
  border: white solid 3px;
  background-color: white;
`;
const MosaicButtonContainer = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  align-items: flex-start;
`;
