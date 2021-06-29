import '../Style/App.css'

const Paragraphs = ({model}) =>{
    return(
        <p className='articleParagraph'>{model.text}</p>
    )
}

export default Paragraphs;