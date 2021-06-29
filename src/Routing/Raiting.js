import '../Style/App.css'

import { useState } from 'react'

const Raiting = ({visitedArticles}) =>{
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
        <div className='container'>
            <h1 className='title'>Raiting</h1>

            <form className='article' method="POST" onSubmit={(e) => {e.preventDefault();stubServerPost(raiting)}}>
                <section className='articleBorder'>
                    {
                        //Map each article to it's own raiting radio buttons
                        visitedArticles.map((article, index) =>{
                            return(
                                <div className='row'>
                                    <h1 className='column articleHeading'>{article.title}</h1>
                                    <aside className='column'>
                                        <div className='radioRaiting'>

                                            <label htmlFor={"rateArticle1"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate1Article"+index} name={article.title} value="1" onChange={(e) => {addRaiting(e.target.name,e.target.value)}} required/>    
                                                <span className='hide'>Bad</span>
                                            </label>

                                            <label htmlFor={"rateArticle2"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate2Article"+index} name={article.title} value="2" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Poor</span>
                                            </label>

                                            <label htmlFor={"rateArticle3"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate3Article"+index} name={article.title} value="3" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Average</span>
                                            </label>

                                            <label htmlFor={"rateArticle4"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate4Article"+index} name={article.title} value="4" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
                                                <span className='hide'>Good</span>
                                            </label>

                                            <label htmlFor={"rateArticle5"+index}>
                                                <input className='showHiddenOnOver' type="radio" id={"rate5Article"+index} name={article.title} value="5" onChange={(e) => {addRaiting(e.target.name,e.target.value)}}/>
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

export default Raiting