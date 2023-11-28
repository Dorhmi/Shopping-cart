
type props = {
    id:number
    name:string
    price:number
    imgUrl: string
}

const StoreItem = ({id , name, price, imgUrl}:props) => {
return (
    <article className="article-container">
        <img className="article-img" src={imgUrl} alt={name} />
        <div className="article-content">
            <h2 className="article-title">{name}</h2>
            <p className="article-price">${price}</p>
        </div>
        <div className="btn-container">
        <button className="article-btn">Add to cart</button>
        </div>
    </article>
)
}

export default StoreItem