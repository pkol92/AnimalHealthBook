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

const useFetchApi = (id?: string) => {
  const [data, setData] = useState<Array<ItemCard> | ItemCard>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const finalURL = id ? `${URL}/${id}` : URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(finalURL);
        setData(response);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [finalURL]);

  return { data, loading, error };
};

export default useFetchApi;
