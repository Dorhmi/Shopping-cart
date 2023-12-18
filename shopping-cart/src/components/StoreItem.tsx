import { useState } from "react"
import { useGlobalContext } from "../context/Context"


type props = {
    id: number
    name: string
    price: number
    imgUrl: string
    amount: number
    text: string
    key: number
}

const StoreItem = ({id , name, price, imgUrl, amount , text }:props) => {
    const {handleAdd 
        , handleRemove 
        , increase
        , decrease
        } = useGlobalContext()
        const [more , setMore] = useState(true)
        const newText = more ? text.slice(0,300) : text
return (
    <article className="article-container">
        <img className="article-img" src={imgUrl} alt={name} />
        <div className="article-content">
            <h2 className="article-title">{name}</h2>
            <p className="article-price">${price}</p>
        </div>
        <p className="article-description">{newText} 
        {more ? <span className="read-more-btn" onClick={()=>setMore(!more)}>Read more</span>
        :<span className="read-more-btn" onClick={()=>setMore(!more)}>Read less</span>}
        </p>
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