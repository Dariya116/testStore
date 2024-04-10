import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcLikePlaceholder } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { CiCircleRemove } from 'react-icons/ci';

import { useAppSelector } from '../store/redux';
import { useActions } from '../store/actions';

import { InterfaceProduct } from '../type/type';

import './componentsStyle.scss';

interface CardProps {
  product: InterfaceProduct;
  key?: number;
}
export const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { addFavorites, removeFavoriteProduct, removeProduct } = useActions();
  const { favoriteProduct } = useAppSelector((state) => state.favorites);

  const handleFavorite = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();

    if (favoriteProduct.includes(product)) {
      removeFavoriteProduct(product);
    } else {
      addFavorites(product);
    }
  };

  const removeCard = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    removeProduct(product);
  };

  const handleCard = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleCard}>
      <img className="card_image" src={product.image} alt="item" />
      <h3 className="card_title">{product.title}</h3>
      <p className="card_description">
        Description:{' '}
        {pathname.includes('/product/')
          ? product.description
          : `${product.description.slice(0, 50)}...`}
      </p>
      <p className="card_category">Category: {product.category}</p>
      <p className="card_price">Price: {product.price}</p>
      <p className="card_rating">Rating:{product.rating.rate}</p>
      <div className="card_icon">
        <div className="card_icon_like" onClick={handleFavorite}>
          {favoriteProduct.find((item) => item.id === product.id) ? (
            <FcLike />
          ) : (
            <FcLikePlaceholder />
          )}
        </div>
        {pathname !== '/favorites' && !pathname.includes('/product/') ? (
          <div className="card_icon_remove" onClick={removeCard}>
            <CiCircleRemove />
          </div>
        ) : null}
      </div>
    </div>
  );
};
