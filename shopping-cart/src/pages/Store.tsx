import StoreItem from '../components/StoreItem'
import { useGlobalContext } from '../context/Context'


const Store = () => {
    const {items} = useGlobalContext();
return (
    <section className='store-section'>
        {items.map((item)=>(
            <StoreItem key={item.id} {...item} />
        ))}
    </section>
)
}

export default Store