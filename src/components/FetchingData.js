import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import useFetch from '../hooks/useFetch';

const FetchingData = () => {
  const { data: products, loading, error } = useFetch('posts');

  if (loading) {
    return <Loading />;
  }

  if (error.length > 0) {
    return <p>{error}</p>;
  }
  return (
    <>
      {products.length &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.body}</p>
            </div>
          );
        })}
    </>
  );
};

export default FetchingData;