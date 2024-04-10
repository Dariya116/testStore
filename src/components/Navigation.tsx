import { Link, useLocation, useNavigate } from 'react-router-dom';
import './componentsStyle.scss';

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const favoritesLocation = location.pathname === '/favorites';

  const handleFavorites = () => {
    if (favoritesLocation) {
      navigate('/');
    } else {
      navigate('/favorites');
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header_store">Store</h1>
      </Link>
      <button
        onClick={handleFavorites}
        className={!favoritesLocation ? 'header_button' : 'header_button_active'}>
        Favorites product
      </button>
    </div>
  );
};
