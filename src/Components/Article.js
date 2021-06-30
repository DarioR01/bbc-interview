import '../Style/App.css'

import Title from './Title'
import Heading from './Heading'
import Paragraphs from './Paragraphs'
import Image from './Image'
import List from './List'
import Error from './Error'

const Article = ({model}) =>{

    /* Runs though the model (json file) and maps the object into corresponding HTML tags*/
    return(
        <div>
            {
                model?
                <article className="container">
                    <Title title={model.title}/>
                    <section className='articleBorder'>
                        {
                            model.body.map((articleDetail, index) =>{
                                switch(articleDetail.type){
                                    case "heading":
                                        return <Heading model={articleDetail.model}/>
                                    case "paragraph":
                                        return <Paragraphs model={articleDetail.model}/>
                                    case "image":
                                        return <Image model={articleDetail.model}/>
                                    case "list":
                                        return <List model={articleDetail.model}/>
                                    default:
                                        return <Error type={articleDetail.type} description="The following element of this page could not have been displayed"/>
                                    
                                }
                            })
                        }
                    </section>
                </article>
                : 
                <Error type="Article Error" description="The downloaded article could not have been displayed, reload the page. If this problem persist report this at ...."/>
            }
        </div>
    )
}

export default Article