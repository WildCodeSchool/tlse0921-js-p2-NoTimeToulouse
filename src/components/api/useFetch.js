import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        return res.data;
      })
      .then((fetchedData) => setData(fetchedData))
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);

  return { data, error, isLoading };
};

export default useFetch;
