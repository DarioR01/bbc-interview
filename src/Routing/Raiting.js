import { useState } from 'react'

/*impot the json files to test the raiting component*/
import article1 from '../Articles/article-1.json'
import article2 from '../Articles/article-2.json'
import article3 from '../Articles/article-3.json'
import article4 from '../Articles/article-4.json'
import article5 from '../Articles/article-5.json'

const Raiting = (visitedArticles) =>{
    visitedArticles= [article1, article2, article3, article4, article5]
    
    const [raiting, setRaiting] = useState([])

    //Server stub of POST request
    async function stubServerPost (send){
        console.log(send)
    }


    //Store raiting in variable raiting
    function addRaiting(title, rate){
        let tmpRaiting = raiting

        //search if entry is already existing
        const er = tmpRaiting.some((ob) => ob.title===title)

        //if entry is already existing, then replace raiting with new one
        if(er){
            tmpRaiting.find((ob) => ob.title===title).raiting = rate
            setRaiting(tmpRaiting)
            return
        }

        //if entry is not existing then push the new raiting
        tmpRaiting.push({title : title, raiting : rate})
        setRaiting(tmpRaiting)
    }

    return(
        <div>
            <h1>Raiting</h1>

                <form method="POST" onSubmit={(e) => {e.preventDefault();stubServerPost(raiting)}}>
                {
                    //Map each article to it's own raiting radio buttons
                    visitedArticles.map((article, index) =>{
                        return(
                            <div>
                                <h1>{article.title}</h1>
                                
                                <label htmlFor={"rateArticle1"+index}>
                                    <input type="radio" id={"rate1Article"+index} name={article.title} value="1" onChange={(e) => {addRaiting(e.target.name,e.target.value)}} required/>
                                    <br/>
                                    <span>Bad</span>
                                </label>

                                <label htmlFor={"rateArticle2"+index}>
                                    <input type="radio" id={"rate2Article"+index} name={article.title} value="2" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                    <br/>
                                    <span>Poor</span>
                                </label>

                                <label htmlFor={"rateArticle3"+index}>
                                    <input type="radio" id={"rate3Article"+index} name={article.title} value="3" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                    <br/>
                                    <span>Average</span>
                                </label>

                                <label htmlFor={"rateArticle4"+index}>
                                    <input type="radio" id={"rate4Article"+index} name={article.title} value="4" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                    <br/>
                                    <span>Good</span>
                                </label>

                                <label htmlFor={"rateArticle5"+index}>
                                    <input type="radio" id={"rate5Article"+index} name={article.title} value="5" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                    <br/>
                                    <span>Excellent</span>
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit"/>
            </form>

        </div>
    )
}

export default Raiting