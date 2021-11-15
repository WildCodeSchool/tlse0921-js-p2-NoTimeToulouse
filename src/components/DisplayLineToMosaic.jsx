import React, { useState } from 'react';

const MosaicButton = () => {
  const [toMosaic, setToMosaic] = useState(false);

  function handleDisplayClick() {
    setToMosaic(!toMosaic);
  }

  return (
    <div>
      <button type="button" onClick={handleDisplayClick}>
        Affichage {toMosaic ? 'en ligne' : 'en mosaïque'}
      </button>
    </div>
  );
};

export default MosaicButton;
