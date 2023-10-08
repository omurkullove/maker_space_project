import { FC } from 'react';
import Main from '../page/Main/Main';
import { Route, Routes } from 'react-router-dom';

const MainTouter: FC = () => {
   const ROUTES = [
      {
         path: '/',
         key: 1,
         element: <Main />,
      },
   ];

   return (
      <Routes>
         {ROUTES.map((route) => (
            <Route
               path={route.path}
               element={route.element}
               key={route.key}
            />
         ))}
      </Routes>
   );
};

export default MainTouter;
