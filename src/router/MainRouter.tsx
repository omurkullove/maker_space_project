import { FC } from 'react';
import Main from '../page/Main/Main';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../page/Main/AboutUs/AboutUsPage';
import Header from '../components/Header/Header';

const MainTouter: FC = () => {
   const ROUTES = [
      {
         path: '/',
         key: 1,
         element: <Main />,
      },
      {
         path: '/about-us',
         key: 2,
         element: <AboutUsPage />,
      },
   ];

   return (
      <>
         <Header />

         <Routes>
            {ROUTES.map((route) => (
               <Route
                  path={route.path}
                  element={route.element}
                  key={route.key}
               />
            ))}
         </Routes>
      </>
   );
};

export default MainTouter;
