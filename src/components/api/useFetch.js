import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        return res;
      })
      .then(setData)
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
