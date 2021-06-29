import '../Style/App.css'

const Heading = ({model}) => {
    return(
        <h2 className='articleHeading'>{model.text}</h2>
    )
}

export default Heading;