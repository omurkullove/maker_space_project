import styles from './Article.module.scss';
import nasaLogo from '../../assets/nasa.svg';

interface IPost {
   name: string;
   date: string;
   text: string;
   id: number;
}

interface IArticleProps {
   date: string;
   title: string;
   text: string;
   post: IPost[];
   id: number;
}

const Article = ({ date, post, text, title, id }: IArticleProps) => {
   return (
      <div
         className={styles.articleBlock}
         key={id}
      >
         <div className={styles.header}>
            <img
               src={nasaLogo}
               className={styles.logo}
            />
            <h1>NASA</h1>
            <p>{date}</p>
         </div>

         <div className={styles.body}>
            <h1>{title}</h1>
            <p>{text}</p>
         </div>

         <div className={styles.footer}>
            <h1>#NASA</h1>
         </div>

         <div className={styles.commentBlock}>
            {post.map((item) => (
               <div className={styles.comment}>
                  <div className={styles.header}>
                     <h1>{item.name}</h1>
                     <p>{item.date}</p>
                  </div>

                  <p className={styles.text}>{item.text}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Article;
