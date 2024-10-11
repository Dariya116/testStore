import { useAppSelector } from '../store/redux';
import { InterfaceProduct } from '../type/type';
import { Card } from '../components/Card';
import '../index.scss';

export const Favorites = () => {
  const { favoriteProduct } = useAppSelector((state) => state.favorites);

  const productFavoritesCart = favoriteProduct?.map((product: InterfaceProduct) => {
    return <Card product={product} key={product.id} />;
  });

  return <div className={'content content_favorites'}>{productFavoritesCart}</div>;
};
