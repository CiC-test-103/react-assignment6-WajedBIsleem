import Picture from './Picture';
import Title from './Title';
import Details from './Details';
import Footer from './Footer';
import styles from './Article.module.css';

const Article = () => {
  return (
    <article className={styles['container']}>
      <Picture />
      <section className={styles['article-content']}>
        <Title />
        <Details />
        <Footer />
      </section>
    </article>
  );
};
export default Article;
