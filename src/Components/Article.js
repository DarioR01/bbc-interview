import Title from './Title'
import Heading from './Heading'
import Paragraphs from './Paragraphs'
import Image from './Image'
import List from './List'

const Article = ({model}) =>{

    /* Runs though the model (json file) and maps the object into corresponding HTML tags*/
    return(
        <article>
            <Title title={model.title}/>
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
                            return <h1>{"Could not display the "+articleDetail.type}</h1>
                        
                    }
                })
            }
        </article>
    )
}

export default Article