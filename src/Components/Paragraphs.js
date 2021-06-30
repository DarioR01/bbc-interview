import '../Style/App.css'

const Paragraphs = ({model}) =>{
    return(
        <p data-testid="paragraphs" className='articleParagraph'>{model.text}</p>
    )
}

export default Paragraphs;