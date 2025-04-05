import { useState } from 'react';
import Author from './Author';
import styles from './Footer.module.css';
import avatar from '../../images/avatar-michelle.jpg';
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';

const ShareLink = ({ setShowTooltip }) => {
  return (
    <a onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className={styles['share-link']}>
      <svg className={styles['share-icon']} width="15" height="15">
        <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
    </a>
  );
};

const ShareTooltip = ({ setShowTooltip }) => {
  return (
    <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className={styles['share-tooltip']}>
      <span className={styles['share-tooltip_text']}>Share</span>
      <img src={facebookIcon} className={styles['share-tooltip_icon']} />
      <img src={twitterIcon} className={styles['share-tooltip_icon']} />
      <img src={pinterestIcon} className={styles['share-tooltip_icon']} />
    </div>
  );
};

const Footer = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={styles['article-footer']}>
      <Author person={{ name: 'Michelle Appleton', avatar }} date="28 Jun 2020" />
      <ShareLink setShowTooltip={setShowTooltip} />
      {showTooltip && <ShareTooltip setShowTooltip={setShowTooltip} />}
    </div>
  );
};

export default Footer;
