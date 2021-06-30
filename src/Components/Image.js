import '../Style/App.css'

const Image = ({model}) =>{
    return(
        <figure className="imageContainer">
            <img data-testid="image" src={model.url} alt={model.altText} width={model.width} height={model.height}/>
        </figure>
    )
}
 
export default Image;