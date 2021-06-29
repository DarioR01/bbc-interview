import { useState } from 'react';

import ArticleView from './Routing/ArticleView'
import Raiting from './Routing/Raiting'

function App() {

  /*set goRate to true to visualise Raiting page*/
  const [goRate, setGoRate] = useState(true)

  return (
    <div>
      {
        goRate?
        <Raiting/>
        :
        <ArticleView/>
      }
    </div>
  );
}

export default App;
