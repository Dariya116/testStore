import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { Navigation } from './components/Navigation';
import { ViewProduct } from './pages/ViewProduct';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
