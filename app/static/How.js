import React from 'react';
import styles from './How.scss';
import C3Chart from 'react-c3js';
import ArticleUrls from './ArticlesUrls';

class How extends React.Component {
  constructor(props) {
    super();

    this.state = {
      data: {
        columns: [
          ['left', 30],
          ['center-left',25],
          ['center', 40],
          ['center-right', 20],
          ['right', 43]
        ],
        types: {
          left: 'bar',
          'center-left': 'bar',
          center: 'bar',
          'center-right': 'bar',
          right: 'bar'
        }
      },
      allUrls: {
        'left-titles': [],
        'left-urls': [],
        'center-left-titles': [],
        'center-left-urls': [],
        'center-titles': [],
        'center-urls': [],
        'center-right-titles': [],
        'center-right-urls': [],
        'right-titles': [],
        'right-urls': []
      },
      showUrls: '',
      result: []
    }

   this.handleSubmit = this.handleSubmit.bind(this);
   this.getData = this.getData.bind(this);
   this.handleArticleUrl = this.handleArticleUrl.bind(this);
   this.sortData = this.sortData.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();

    let submittedText = {
      search: document.getElementById('inputText').value
    }

    let form = document.getElementById('form');
    form.reset();

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', this.getData);
    oReq.addEventListener('error', (event) => {
      console.log('error', event);
    })
    oReq.open('POST', '/article-search');
    oReq.setRequestHeader("content-type", "application/json");
    oReq.send(JSON.stringify(submittedText));

  }

  getData(event) {
    let articles = JSON.parse(event.currentTarget.responseText);
    this.setState(articles)
  }

  handleArticleUrl(event) {
    const {innerHTML} = event.target;
    this.setState({
      showUrls: innerHTML.toLowerCase(),
      result: this.sortData(innerHTML.toLowerCase() + '-urls', innerHTML.toLowerCase() + '-titles' )
    })
  }

  sortData(url, title) {
    const results = this.state.allUrls[`${url}`].map((curr, indx) => {
      return {
        url: curr,
        title: this.state.allUrls[`${title}`][indx]
      }
    })
    return results || []
  }


  render() {
    console.log('this.state.showUrls: ', this.state.showUrls);
    return (
      <div className={styles.container}>

        <div className={styles.title}>
          <h2>Give Oblik A Test Run</h2>
        </div>

        <div className={styles.explain}>
          <p>
            Go ahead enter a topic that interests you!! Click the
            buttons below to explore related news articles
            from hundreds different sources and views.
          </p>
          <p>
            Cant find what your looking for? Dont worry, we are adding thousands of articles
            a day to ensure you have the most up to date news all the time.
          </p>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.leftHow}>
            <form id="form" className={styles.form} onSubmit={this.handleSubmit}>
              <input type="text" id="inputText" placeholder="search for a topic" />
              <input type="submit" id="submit" value="SUBMIT" />
            </form>

            <C3Chart data={this.state.data} style={{width: 500, height: 400}} />
          </div>

          <div className={styles.chart}>
            <div className={styles.urlButtons}>
              <button className={styles.button} onClick={this.handleArticleUrl}>Left</button>
              <button className={styles.button} onClick={this.handleArticleUrl}>Center-Left</button>
              <button className={styles.button} onClick={this.handleArticleUrl}>Center</button>
              <button className={styles.button} onClick={this.handleArticleUrl}>Center-Right</button>
              <button className={styles.button} onClick={this.handleArticleUrl}>Right</button>
              <ArticleUrls data={this.state.result} title={this.state.showUrls} />
            </div>
          </div>
        </div>

          <div className={styles.info}>
            <p className={styles.info1}>
              <h3>How relationships were established between the articles</h3>
              Dessert cake pudding jujubes wafer tootsie roll candy canes ice cream tart. Lollipop sugar plum carrot cake chupa chups ice cream cheesecake carrot cake. Carrot cake donut cake.
              Lemon drops sweet roll cake ice cream liquorice sugar plum toffee. Brownie candy tiramisu jelly marzipan. Liquorice croissant pastry. Chocolate bar powder sweet chocolate bar toffee.
              Sweet oat cake marzipan cotton candy marzipan cupcake halvah donut. Jujubes liquorice pie. Croissant powder apple pie jelly-o candy canes candy gummies.
              Liquorice donut cake caramels carrot cake wafer. Marshmallow bear claw pastry marzipan carrot cake jelly tart. Cake candy sugar plum.
              Cotton candy jelly gingerbread gingerbread. Pudding gummies soufflé jujubes. Danish tootsie roll sesame snaps pie ice cream.
            </p>
            <p className={styles.info2}>
              <h3>Road Blocks Along The Way</h3>
              Dessert cake pudding jujubes wafer tootsie roll candy canes ice cream tart. Lollipop sugar plum carrot cake chupa chups ice cream cheesecake carrot cake. Carrot cake donut cake.
              Lemon drops sweet roll cake ice cream liquorice sugar plum toffee. Brownie candy tiramisu jelly marzipan. Liquorice croissant pastry. Chocolate bar powder sweet chocolate bar toffee.
              Sweet oat cake marzipan cotton candy marzipan cupcake halvah donut. Jujubes liquorice pie. Croissant powder apple pie jelly-o candy canes candy gummies.
              Liquorice donut cake caramels carrot cake wafer. Marshmallow bear claw pastry marzipan carrot cake jelly tart. Cake candy sugar plum.
              Cotton candy jelly gingerbread gingerbread. Pudding gummies soufflé jujubes. Danish tootsie roll sesame snaps pie ice cream.
            </p>
          </div>
      </div>
    )
  }

}



export default How;