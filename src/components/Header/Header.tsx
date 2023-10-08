import styles from './Header.module.scss';
import navLogo from '../../assets/SapceY.svg';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
   const LINKS = [
      {
         name: 'Home',
         path: '/',
         id: 1,
      },
      {
         name: 'About Us',
         path: '/about-us',
         id: 2,
      },
   ];

   const { pathname } = useLocation();

   return (
      <nav>
         <img
            src={navLogo}
            className={styles.logo}
         />

         <div className={styles.navBlock}>
            {LINKS.map((link) => (
               <Link
                  to={link.path}
                  key={link.id}
                  style={{ textDecoration: pathname === link.path ? 'underline' : '' }}
               >
                  {link.name}
               </Link>
            ))}
         </div>
      </nav>
   );
};

export default Header;
