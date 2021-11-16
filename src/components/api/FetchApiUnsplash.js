import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchApiUnsplash = (theme) => {
  const [urlImg, setUrlImg] = useState('');
  const [userName, setUserName] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?query=${theme}&count=1&client_id=cv-qpRxao8VaEyXIgyhc9nU4c7x38nuqEeVOjmDXlc0`,
      )
      .then((response) => response.data)
      .then((responseData) => setUrlImg(
        responseData[0].urls.regular,
        setUserName(responseData[0].user.username),
      ));
  }, []);

  return {
    urlImg,
    userName,
  };
};

export default fetchApiUnsplash;
