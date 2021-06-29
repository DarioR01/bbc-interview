const Error = ({type, description}) =>{
    return(
        <div>
            <h1>{type}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Error