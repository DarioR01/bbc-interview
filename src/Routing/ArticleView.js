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
    To replicate slow connection increase the internet delay value (for each 1000 1 second delay) e.g. try to replace 0 with 2000 for a delay of 2 seconds
*/
const connection = true;
const internetDelay = 0;

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
            , internetDelay)
    })
}


const ArticleView = ({setGoRate, setArticleViewed}) =>{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    const [currentArticle, setCurrentArticle] = useState (undefined)
    const [articleIndex, setArticleIndex] = useState (1)

    let [tmpVisitedArticle, setTmpVisitedArticle] = useState([])

    useEffect(
        async () =>{
            try{
                setCurrentArticle(await serverGetRequestStub(articleIndex))
            }
            catch (err){
                if(err){
                    setError(err)
                }
                else{
                    setGoRate(true)
                }
            }
            setLoading(false)
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