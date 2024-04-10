import { useEffect } from 'react';

import { Card } from '../components/Card';
import { InterfaceProduct } from '../type/type';
import { useGetProductsQuery } from '../store/slices/ProductsApi';

import { useActions } from '../store/actions';
import { useAppSelector } from '../store/redux';

import '../index.scss';

export const Home = () => {
  const { setAllProducts } = useActions();
  const { allProducts } = useAppSelector((state) => state.favorites);

  const { isSuccess, isLoading, isError, data } = useGetProductsQuery();

  useEffect(() => {
    isSuccess && setAllProducts(data);
  }, [data]);

  const productCart = allProducts?.map((product: InterfaceProduct) => {
    return <Card product={product} key={product.id} />;
  });

  return (
    <div className="content">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching </p>}
      {productCart}
    </div>
  );
};
