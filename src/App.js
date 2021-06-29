import { useState } from 'react';

import ArticleView from './Routing/ArticleView'
import Raiting from './Routing/Raiting'

function App() {

  /*set goRate to true to visualise Raiting page*/
  const [goRate, setGoRate] = useState(false)
  const [visitedArticle, setVisitedArticle] = useState([])

  return (
    <div>
      {
        goRate?
        <Raiting visitedArticles={visitedArticle}/>
        :
        <ArticleView setGoRate={setGoRate} setArticleViewed={setVisitedArticle}/>
      }
    </div>
  );
}

export default App;
