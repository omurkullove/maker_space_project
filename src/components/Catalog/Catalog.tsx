import { useEffect } from 'react';
import styles from './Catalog.module.scss';

const Catalog = () => {
   useEffect(() => {}, []);

   return (
      <div className={styles.catalog}>
         <div className={styles.eventBlock}>
            <div className={styles.event1}>
               <h1>Flood occurred in Tajikistan</h1>
            </div>

            <div className={styles.event2}>
               <div className={styles.event2_1}>
                  <h1>Programmers are cool gangsters</h1>
               </div>

               <div className={styles.event2_2}>
                  <h1>Volunteers found nasvay</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Catalog;
