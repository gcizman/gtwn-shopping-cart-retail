import { Navigate, useRoutes } from 'react-router-dom';
import Basket from './componets/Basket/Basket';
import ContextFilter from './componets/Context/ContextFilter';
import ContextProvider from './componets/Context/ContextProvider';
import Details from './componets/Details/Details';
import FavoritePage from './componets/Favourite/FavoritePage';
import Header from './componets/Header/Header';
import Products from './componets/Products/Products';


function App() {
  let router = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
  ])
  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
