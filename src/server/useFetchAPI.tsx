import { FC, ReactNode, useEffect, useState } from 'react';

import axios from 'axios';

export interface ItemCard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string | undefined;
  rating: {
    rate: number;
    count: number;
  };
}

const URL = 'https://fakestoreapi.com/products';

const useFetchApi = () => {
  const [data, setData] = useState<Array<ItemCard>>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(URL);
        setData(response);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchApi;
