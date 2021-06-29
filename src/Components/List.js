import '../Style/App.css'

const List = ({model}) =>{
    /*Check if the type of list from json document is unordered or ordered and return the correct type of list*/
    switch(model.type){
        case "unordered" :
            return(
                <ul className='articleUList'>
                    {model.items.map((item, index) =>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            )
        case "ordered" :
            return(
                <ol className='articleOList'>
                    {model.items.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ol>
            )
        default:
            return (<h1> List could not display </h1>)
    }
}

export default List