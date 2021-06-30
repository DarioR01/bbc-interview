# bbc

### `Server Stub`
GET request to the server is stubbed in [ArticleView.js](./src/Routing/ArticleView.js).\
POST request to the server is stubbed in [Rating.js](./src/Routing/Rating.js). POST request prints on the console what would be sent to the server.

### `Connectivity Delay`

To trigger connection delay issues to the stubbed server change the variable internetDelay in [ArticleView.js](./src/Routing/ArticleView.js) to a value > 0 in seconds (e.g. 2 would make the delay of 2 seconds) 

### `Connection Fail to the server`

To trigger connection fail to the stubbed server change the variable connection in [ArticleView.js](./src/Routing/ArticleView.js) to false

### `Performance`

To better experiment with pre-loading next article feature of this application, set a connectivity delay and run the code.\ 
If you want to observe the pre-loading feature wait the ammount of time you specified in the connectivity delay before pressing the next button.\
While the user reads the article the application will fetch for the next article in an asynchronous fashion, improving the performance of a slow connection.

### `test`

I did a basic test called [Article.test.js](./src/Test/Article.test.js) for the [Article.js](./src/Components/Article.js) component.\
The plan was to create a testsuite for [Article.js](./src/Components/Article.js), [ArticleView.js](./src/Routing/ArticleView.js), and [Rating.js](./src/Routing/Rating.js).\
To do that I would have used react native library "@testing-library/react".

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.