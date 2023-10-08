import { FC, useState } from 'react';
import styles from './Main.module.scss';
import Earth from '../../assets/Earth.svg';
import Catalog from '../../components/Catalog/Catalog';
import Article from '../../components/Article/Aarticle';

const Main: FC = () => {
   const [page, setPage] = useState(0);

   const handleNext = () => {
      if (page < articles.length - 1) {
         setPage((prev) => prev + 1);
      }
   };

   const handlePrev = () => {
      if (page > 0) {
         setPage((prev) => prev - 1);
      }
   };

   const articles = [
      {
         date: '12.05.2022',
         text: 'In the modern world of space exploration, the search for exoplanets with potential for life has become a top priority. With advancements in technology, we are getting closer to answering the question of whether life exists beyond Earth.',
         title: 'The Quest for Exoplanets',
         post: [
            {
               date: '21.02.2022',
               id: 1,
               name: 'John Mike',
               text: 'The search for exoplanets is a fascinating journey. It could change our understanding of the universe and our place in it.',
            },
            {
               date: '21.02.2022',
               id: 2,
               name: 'Alice Johnson',
               text: "I agree, Alice. It's an exciting time to be involved in space exploration.",
            },
         ],
      },
      {
         date: '13.05.2022',
         text: 'The challenges of interplanetary travel are numerous. Long-duration missions, radiation exposure, and life support systems are just some of the hurdles that must be overcome.',
         title: 'Interplanetary Travel Challenges',
         post: [
            {
               date: '22.02.2022',
               id: 1,
               name: 'Jane Doe',
               text: "Interplanetary travel is the next big step for humanity. It's a complex but essential journey.",
            },
         ],
      },
      {
         date: '14.05.2022',
         text: 'Asteroid and comet defense is a topic of great importance. We need to develop strategies to protect Earth from potential impacts.',
         title: 'Defending Earth from Asteroids',
         post: [],
      },
      {
         date: '15.05.2022',
         text: 'The mysteries of black holes continue to captivate scientists. Understanding these enigmatic objects could unlock the secrets of the universe.',
         title: 'Unraveling the Mysteries of Black Holes',
         post: [
            {
               date: '22.02.2022',
               id: 1,
               name: 'Carl Smith',
               text: "The study of black holes is a journey into the unknown. It's a thrilling pursuit of knowledge.",
            },
         ],
      },
      {
         date: '16.05.2022',
         text: 'Space technologies are advancing rapidly. From reusable rockets to satellite constellations, innovation is reshaping space exploration.',
         title: 'Advancements in Space Technology',
         post: [
            {
               date: '23.02.2022',
               id: 1,
               name: 'Eva Brown',
               text: "The pace of technological progress in space is astonishing. It's an exciting time for space enthusiasts.",
            },
            {
               date: '23.02.2022',
               id: 2,
               name: 'David Clark',
               text: 'Indeed, David. The future of space exploration looks promising.',
            },
         ],
      },
      {
         date: '17.05.2022',
         text: 'The search for signs of past or present life on Mars continues. The red planet remains a focus of astrobiology research.',
         title: 'Life on Mars: A Continuing Quest',
         post: [
            {
               date: '24.02.2022',
               id: 1,
               name: 'Lucy Taylor',
               text: 'The possibility of finding life on Mars is an exciting prospect. It would be a historic discovery.',
            },
         ],
      },
      {
         date: '18.05.2022',
         text: 'The exploration of distant galaxies and their formation is shedding light on the origins of the universe.',
         title: 'Journey to Distant Galaxies',
         post: [],
      },
      {
         date: '19.05.2022',
         text: 'The challenges of deep space travel are pushing the boundaries of human exploration. We must develop the technology to sustain life during long missions.',
         title: 'Deep Space Exploration Challenges',
         post: [
            {
               date: '25.02.2022',
               id: 1,
               name: 'Michael Adams',
               text: 'The idea of exploring deep space is both thrilling and daunting. We have much to learn and prepare for.',
            },
            {
               date: '25.02.2022',
               id: 2,
               name: 'Samantha White',
               text: 'Absolutely, Samantha. Deep space missions represent the future of space exploration.',
            },
         ],
      },
      {
         date: '20.05.2022',
         text: "The study of gravitational waves has opened a new window into the cosmos. It's a remarkable achievement that enhances our understanding of the universe.",
         title: 'Gravitational Waves: A Cosmic Symphony',
         post: [],
      },
      {
         date: '21.05.2022',
         text: 'The mysteries of the early universe and the Big Bang are among the most profound questions in cosmology. Researchers continue to seek answers.',
         title: 'Unveiling the Secrets of the Early Universe',
         post: [
            {
               date: '26.02.2022',
               id: 1,
               name: 'Oliver Turner',
               text: 'Studying the origins of the universe is a humbling and awe-inspiring journey. We are uncovering the story of our existence.',
            },
            {
               date: '26.02.2022',
               id: 2,
               name: 'Emily Walker',
               text: 'Indeed, Emily. Cosmology pushes the boundaries of human knowledge.',
            },
         ],
      },
   ];

   return (
      <main className={styles.main}>
         <div className={styles.earthBlock}>
            <img
               src={Earth}
               className={styles.earth_svg}
            />
         </div>

         <center>Join our events</center>
         <Catalog />
         <center>Articles</center>
         <div className={styles.article}>
            <button
               className={styles.paginationButton}
               onClick={handlePrev}
               disabled={page > articles.length}
            >
               Previous
            </button>
            <div className={styles.articleBlock}>
               {articles.map((item, index) => {
                  if (index === page) {
                     return (
                        <Article
                           date={item.date}
                           post={item.post}
                           text={item.text}
                           key={item.id}
                           id={item.id}
                           title={item.title}
                        />
                     );
                  } else null;
               })}
            </div>
            <button
               className={styles.paginationButton}
               disabled={page == articles.length}
               onClick={handleNext}
            >
               Next
            </button>
         </div>
      </main>
   );
};

export default Main;
