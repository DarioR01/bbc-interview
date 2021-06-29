import ArticleView from './Routing/ArticleView'

/*impot the json files for testing purposes*/
import article1 from './Articles/article-1.json'
import article2 from './Articles/article-2.json'
import article3 from './Articles/article-3.json'
import article4 from './Articles/article-4.json'
import article5 from './Articles/article-5.json'


function App() {
  /* changing the article passed in the model will render a different article following the object inside the JSON file */
  return (
    <ArticleView/>
  );
}

export default App;
