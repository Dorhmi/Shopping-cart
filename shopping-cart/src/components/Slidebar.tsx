import { useGlobalContext } from "../context/Context"
import CartItem from "./CartItem"



const Slidebar = () => {
    const {isOpen , setIsOpen ,  cartItems } =  useGlobalContext()
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
    </aside>
)
}

export default Slidebar