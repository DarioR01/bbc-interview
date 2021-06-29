import '../Style/App.css'

import { useState } from 'react'

const Rating = ({visitedArticles}) =>{
    const [rating, setRating] = useState([])

    //Server stub of POST request
    async function stubServerPost (send){
        console.log(send)
    }


    //Store rating in variable rating
    function addRating(title, rate){
        let tmpRating = rating

        //search if entry is already existing
        const er = tmpRating.some((ob) => ob.title===title)

        //if entry is already existing, then replace rating with new one
        if(er){
            tmpRating.find((ob) => ob.title===title).rating = rate
            setRating(tmpRating)
            return
        }

        //if entry is not existing then push the new rating
        tmpRating.push({title : title, rating : rate})
        setRating(tmpRating)
    }

    return(
        <div className='container'>
            <h1 className='title'>Rating</h1>

            <form className='article' method="POST" onSubmit={(e) => {e.preventDefault();stubServerPost(rating)}}>
                <section className='articleBorder'>
                    {
                        //Map each article to it's own rating radio buttons
                        visitedArticles.map((article, index) =>{
                            return(
                                <div className='row'>
                                    <h1 className='column articleHeading'>{article.title}</h1>
                                    <aside className='column'>
                                        <div className='radioRating'>

                                            <label htmlFor={"rateArticle1"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate1Article"+index} name={article.title} value="1" onChange={(e) => {addRating(e.target.name,e.target.value)}} required/>    
                                                <span className='hide'>Bad</span>
                                            </label>

                                            <label htmlFor={"rateArticle2"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate2Article"+index} name={article.title} value="2" onChange={(e) => {addRating(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Poor</span>
                                            </label>

                                            <label htmlFor={"rateArticle3"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate3Article"+index} name={article.title} value="3" onChange={(e) => {addRating(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Average</span>
                                            </label>

                                            <label htmlFor={"rateArticle4"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate4Article"+index} name={article.title} value="4" onChange={(e) => {addRating(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Good</span>
                                            </label>

                                            <label htmlFor={"rateArticle5"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate5Article"+index} name={article.title} value="5" onChange={(e) => {addRating(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Excellent</span>
                                            </label>

                                        </div>
                                    </aside>
                                </div>
                            )
                        })
                    }
                </section>
                <input className='redButton' type="submit"/>
            </form>

        </div>
    )
}

export default Rating