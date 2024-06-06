import { useState, useEffect } from 'react';
import { cardsDataType } from '../types/cardData';



const useFetchData = (url: string) => {
  const [data, setData] = useState<cardsDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (Error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [error, url]);

  return { data, isLoading, error };
};

export default useFetchData;
