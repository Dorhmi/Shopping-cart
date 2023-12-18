import { useGlobalContext } from "../context/Context"



const Slidebar = () => {
    const {isOpen , setIsOpen , items} =  useGlobalContext()
return (
    <aside className={`side-bar ${isOpen && 'show-bar'}`}>
        <div className="side-header">
            <h3 className="side-title">Cart</h3>
            <button onClick={()=>setIsOpen(false)} className="side-btn">X</button>
        </div>
        <div className="cart-content">
            {items.map((item) => (
                <article>item</article>
            ))}
        </div>
    </aside>
)
}

export default Slidebar