import React, { useState, useEffect } from 'react';
import paginate from './utils/paginate';
const url = 'https://api.github.com/users?john-smilga/followers?per_page=100';
export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getFetch = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(paginate(json));
    console.log(data);
    setLoading(false);
  };
  useEffect(() => {
    getFetch();
  }, []);

  return { loading, data };
};
