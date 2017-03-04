import React from 'react';
import styles from './Page.scss';

class Page extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.banner}>
          <div className={styles.container}>
            <h1 className={styles.headline}>Get a Different Perspective</h1>
            <span className={styles.tagline}>Read news articles from the left, right, and just in between.</span>
          </div>
              <a href="https://chrome.google.com/webstore/detail/
                oblikus/jdhmfapoagfijjpbnknhnhojmccphfjb?hl=en-US"
                target="_blank"
                className={styles.btn}>Download Now
              </a>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.newsExplain}>Over 50+ news sources</div>
          <img src={'http://i.imgur.com/aFZOJfT.png'} alt="news_articles" className={styles.newsLogos}/>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.row}>
            <div className={[styles.primary, styles.col].join(' ')}>
              <h2>Click and See</h2>

              <p>Cupcake ipsum dolor sit. Amet chocolate cake gummies jelly beans candy bonbon brownie candy. Gingerbread powder muffin. Icing cotton candy. Croissant icing pie ice cream brownie I love cheesecake cookie. Pastry chocolate pastry jelly croissant.</p>

            </div>

            <div className={[styles.secondary, styles.col].join(' ')}>
              <div className={styles.screenshot}><img src={"https://media.giphy.com/media/3o7btQ8PMLVCCS9JZK/giphy.gif"} className={styles.neo4jgif} alt="neo4j gif"/></div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={[styles.primary, styles.col].join(' ')}>
              <h2>Pick a side</h2>


              <p>Cake sesame snaps sweet tart candy canes tiramisu I love oat cake chocolate bar. Jelly beans pastry brownie sugar plum pastry bear claw tiramisu tootsie roll. Tootsie roll wafer I love chocolate donuts.</p>

            </div>

            <div className={[styles.secondary, styles.col].join(' ')}>
              <div className={styles.screenshot}></div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={[styles.primary, styles.col].join(' ')}>
              <h2>Want to see more?</h2>
              <p>Check out how our project works! </p>
            </div>

            <div className={[styles.secondary, styles.col].join(' ')}>
              <div className={styles.screenshot}><img src={"https://media.giphy.com/media/3og0IFNBqItdxx2oJq/giphy.gif"} className={styles.neo4jgif} alt="neo4j gif"/></div>
            </div>
          </div>
        </div>
      </div>

    )
  }
};

export default Page;