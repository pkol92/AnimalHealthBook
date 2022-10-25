import { ReactNode, useEffect, useState } from 'react';

import axios from 'axios';

interface ItemCard {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: ReactNode;
  rating: {
    rate: number;
    count: number;
  };
}

const FetchApi = () => {
  const [shopData, setShopData] = useState<Array<ItemCard>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(URL);
        setShopData(response);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { shopData, loading, error };
};

export default FetchApi;
