import { useState } from 'react';

import ArticleView from './Routing/ArticleView'
import Rating from './Routing/Rating'

function App() {

  /*set goRate to true to visualise Rating page*/
  const [goRate, setGoRate] = useState(false)
  const [visitedArticle, setVisitedArticle] = useState([])

  return (
    <div>
      {
        goRate?
        <Rating visitedArticles={visitedArticle}/>
        :
        <ArticleView setGoRate={setGoRate} setArticleViewed={setVisitedArticle}/>
      }
    </div>
  );
}

export default App;
