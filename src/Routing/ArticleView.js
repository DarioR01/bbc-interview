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
const internetDelay = 1000;

/*Stub GET request*/ 
async function serverGetRequestStub (index) {
    return new Promise((resolve,reject) => {
        if(!connection){
            reject({type: "connection", description: "impossible to connect to server, try later"})
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


const ArticleView = () =>{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(undefined)

    const [currentArticle, setCurrentArticle] = useState (undefined)
    const [articleIndex, setArticleIndex] = useState (1)

    useEffect(
        async () =>{
            try{
                setCurrentArticle(await serverGetRequestStub(articleIndex))
            }
            catch (err){
                setError(err)
            }
            setLoading(false)
        }
    , [articleIndex] )

    function nextArticle(){
        setLoading(true)
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
                <div>
                    <Article model={currentArticle}/>
                    <button onClick={nextArticle}>Next</button>
                </div>
            }
        </div>
    )
}

export default ArticleView