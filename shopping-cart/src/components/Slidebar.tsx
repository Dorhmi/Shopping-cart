import { useGlobalContext } from "../context/Context"
import CartItem from "./CartItem"



const Slidebar = () => {
    const {isOpen , setIsOpen ,  cartItems , total} =  useGlobalContext()
return (
    <aside className={`side-bar ${isOpen && 'show-bar'}`}>
        <div className="side-header">
            <h3 className="side-title">Cart</h3>
            <button onClick={()=>setIsOpen(false)} className="side-btn">X</button>
        </div>
        <div className="cart-content">
            {cartItems.map((item) => (
                <CartItem key={item.id} {...item}/>
            ))}
        </div>
        <h3 className="total-price">Total : ${total}</h3>
    </aside>
)
}

export default Slidebar