import styles from './Author.module.css';

const Author = ({ person, date }) => {
  return (
    <div className={styles['article-author']}>
      <img src={person.avatar} className={styles['article-author_avatar']} />
      <div className={styles['article-author_details']}>
        <span className={styles['article-author_name']}>{person.name}</span>
        <span className={styles['article-author_date']}>{date}</span>
      </div>
    </div>
  );
};

export default Author;
