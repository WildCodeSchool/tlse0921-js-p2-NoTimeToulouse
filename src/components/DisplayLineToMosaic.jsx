import React from 'react';

const MosaicButton = (props) => {
  const { toMosaic, handleDisplayClick } = props;
  return (
    <div>
      <button type="button" onClick={handleDisplayClick}>
        Affichage {toMosaic ? 'en ligne' : 'en mosaïque'}
      </button>
    </div>
  );
};

export default MosaicButton;
