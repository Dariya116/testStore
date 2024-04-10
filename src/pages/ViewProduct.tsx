import { useParams } from 'react-router-dom';

import { useGetProductQuery } from '../store/slices/ProductsApi';
import { Card } from '../components/Card';

export const ViewProduct = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useGetProductQuery(String(id));

  return (
    <div className={'content content_product'}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching </p>}
      {data && <Card key={data.id} product={data} />}
    </div>
  );
};
