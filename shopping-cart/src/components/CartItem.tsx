import React from "react"
import { useGlobalContext } from "../context/Context"



type props = {
    id: number
    name: string
    price: number
    imgUrl: string
    amount: number
    key: number
}


const CartItem : React.FC<props>= ({id , name, price, imgUrl, amount}) => {
    const {handleRemove} = useGlobalContext()
return (
    <article className="item-container">
        <img className="item-img" src={imgUrl} alt={name} />
        <div className="item-content">
            <div className="title-content">
                <div className="item-title">
                    <h4 className="title">{name}</h4>
                    <p className="amount">x{amount}</p>
                </div>
                <p className="price">${price}</p>
            </div>
            <div className="price-content">
                <h4 className="item-total">${price*amount}</h4>
                <button onClick={()=>{handleRemove(id)}} className="item-btn">x</button>
            </div>
        </div>
    </article>
)
}

export default CartItem