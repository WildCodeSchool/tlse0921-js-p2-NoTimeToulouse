import axios from 'axios';
import { useState, useEffect } from 'react';

const useMyImg = (theme) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?query=${theme}&count=1&client_id=cv-qpRxao8VaEyXIgyhc9nU4c7x38nuqEeVOjmDXlc0`,
      )
      .then((res) => res.urls.regular)
      .then((fetchedImg) => {
        setUrl(fetchedImg);
      });
  }, []);

  return url;
};

export default useMyImg;
