import '../Style/App.css'

const Error = ({type, description}) =>{
    return(
        <section className='errorContainer'>
            <h1 className='errorTitle'>{type}</h1>
            <p className='errorDescription'>{description}</p>
        </section>
    )
}

export default Error