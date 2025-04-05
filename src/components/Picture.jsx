import styles from './Picture.module.css';
import drawers from '../../images/drawers.jpg';

const Picture = () => {
  return (
    <section className={styles['article-picture']}>
      <img src={drawers} className={styles['article-image']} />
    </section>
  );
};
export default Picture;
