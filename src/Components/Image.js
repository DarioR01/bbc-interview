const Image = ({model}) =>{
    return(
        <figure>
            <img src={model.url} alt={model.altText} width={model.width} height={model.height}/>
        </figure>
    )
}
 
export default Image;