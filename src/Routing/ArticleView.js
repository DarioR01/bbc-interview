import { useState, useEffect } from 'react'

import Article from '../Components/Article'
import Loading from '../Components/Loading'
import Error from '../Components/Error'

/*impot the json files to stub the Get request to a server*/
import article1 from '../Articles/article-1.json'
import article2 from '../Articles/article-2.json'
import article3 from '../Articles/article-3.json'
import article4 from '../Articles/article-4.json'
import article5 from '../Articles/article-5.json'

/* 
    For connection error set the variable connection to false
    To replicate slow connection increase the internet delay value. The value is in seconds. e.g. try to replace 0 with 2 for a delay of 2 seconds
*/
const connection = true;
const internetDelay = 2 /*seconds*/;

/*Stub GET request*/ 
async function serverGetRequestStub (index) {
    return new Promise((resolve,reject) => {
        if(!connection){
            reject({type: "ERROR 500: Internal Server Error", description: "The server encountered an unexpected condition, which prevented it from fulfilling the request. Try again later."})
        }
            setTimeout(
                () =>{
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
                }
            , (internetDelay*1000))
    })
}


const ArticleView = ({setGoRate, setArticleViewed}) =>{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    const [currentArticle, setCurrentArticle] = useState (undefined)
    const [articleIndex, setArticleIndex] = useState (1)

    const [preLoad, setPreLoad] = useState ({index: 0, article: undefined})

    /*Variable to prevent race condition when preloading*/ 
    const [fetching, setFetching] = useState (false)

    let [tmpVisitedArticle, setTmpVisitedArticle] = useState([])

    useEffect(
        async () =>{
            if(preLoad.index===articleIndex && !fetching){
                try{
                    setCurrentArticle(preLoad.article)
                    setLoading(false)
                    setFetching(true)
                    setPreLoad({index: articleIndex+1, article: await serverGetRequestStub(articleIndex+1)})
                    setFetching(false)
                }catch(err){
                    console.log(err)
                }
            }

            else{
                try{
                    setCurrentArticle(await serverGetRequestStub(articleIndex))
                    setLoading(false)
                    setFetching(true)
                    try{
                        setPreLoad({index: articleIndex+1, article: await serverGetRequestStub(articleIndex+1)})
                    }catch(err){/*Avoid to go to Rating if visualizing last page and preloading the goRate response of the server*/}
                    setFetching(false)
                }
                catch (err){
                    if(err){
                        setError(err)
                    }
                    else{
                        setGoRate(true)
                    }
                }
            }
        }
    , [articleIndex] )

    function nextArticle(){
        setLoading(true)
        tmpVisitedArticle.push(currentArticle)
        setArticleViewed(tmpVisitedArticle)
        setArticleIndex(articleIndex+1)
    }

    return(
        <div>
            {
                loading?
                <Loading/>
                :
                error?
                <Error type={error.type} description={error.description}/>
                :
                <section className="container">
                    <Article model={currentArticle}/>
                    <button className="redButton" onClick={nextArticle}>Next</button>
                </section>
            }
        </div>
    )
}

export default ArticleView