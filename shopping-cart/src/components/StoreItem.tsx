import { useGlobalContext } from "../context/Context"

type props = {
    id:number
    name:string
    price:number
    imgUrl: string
    amount:number
}

const StoreItem = ({id , name, price, imgUrl, amount}:props) => {
    const {handleAdd 
        , handleRemove 
        , increase
        ,decrease
        } = useGlobalContext()
return (
    <article className="article-container">
        <img className="article-img" src={imgUrl} alt={name} />
        <div className="article-content">
            <h2 className="article-title">{name}</h2>
            <p className="article-price">${price}</p>
        </div>
        <div className="btn-container">
            {amount === 0 
            ?<button className="article-btn" onClick={()=>handleAdd(id)}>Add to cart</button>
            :<div className="amount-container">
                <div className="amount-btns">
                    <button className="amount-btn" onClick={()=>increase(id)}>+</button>
                    <p><strong>{amount}</strong> <span className="amount-text">In cart</span></p>
                    <button className="amount-btn" onClick={()=>decrease(id)}>-</button> 
                </div>
                <button className="remove-btn" onClick={()=>handleRemove(id)}>remove</button>
            </div>}
        </div>
    </article>
)
}

export default StoreItem