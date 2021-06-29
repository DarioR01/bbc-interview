import { useState, useEffect } from 'react'

import Article from '../Components/Article'

/*impot the json files to stub the Get request to a server*/
import article1 from '../Articles/article-1.json'
import article2 from '../Articles/article-2.json'
import article3 from '../Articles/article-3.json'
import article4 from '../Articles/article-4.json'
import article5 from '../Articles/article-5.json'


/*Stub GET request*/ 
async function serverGetRequestStub (index) {
    return new Promise((resolve,reject) => {
        switch (index){
            case 1:
                resolve(article1)
                break
            case 2:
                resolve(article2)
                break
            case 3:
                resolve(article3)
                break
            case 4:
                resolve(article4)
                break
            case 5:
                resolve(article5)
                break
            default:
                reject(undefined)
        }
    })
}


const ArticleView = () =>{
    const [currentArticle, setCurrentArticle] = useState (undefined)
    const [articleIndex, setArticleIndex] = useState (1)

    useEffect(
        async () =>{
            try{
                setCurrentArticle(await serverGetRequestStub(articleIndex))
            }
            catch (err){
                console.log(err)
            }
        }
    , [articleIndex] )

    function nextArticle(){
        setArticleIndex(articleIndex+1)
    }

    return(
        <div>
            {
                currentArticle?
                <div>
                    <Article model={currentArticle}/>
                    <button onClick={nextArticle}>Next</button>
                </div>
                :
                <h1>Loading</h1>
            }
        </div>
    )
}

export default ArticleView