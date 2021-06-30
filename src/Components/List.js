import '../Style/App.css'

const List = ({model}) =>{
    /*Check if the type of list from json document is unordered or ordered and return the correct type of list*/
    switch(model.type){
        case "unordered" :
            return(
                <ul data-testid="unorderedList" className='articleUList'>
                    {model.items.map((item, index) =>{
                        return <li data-testid="unorderedListItem" key={index}>{item}</li>
                    })}
                </ul>
            )
        case "ordered" :
            return(
                <ol data-testid="orderedList" className='articleOList'>
                    {model.items.map((item,index) => {
                        return <li data-testid="orderedListItem" key={index}>{item}</li>
                    })}
                </ol>
            )
        default:
            return (<h1> List could not display </h1>)
    }
}

export default List