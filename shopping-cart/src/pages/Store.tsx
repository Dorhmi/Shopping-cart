import StoreItem from '../components/StoreItem'
import data from '../data/data'
// import {useState} from 'react'


const Store = () => {
    // const [items , setItems] = useState(data)
return (
    <section className='store-section'>
        {data.map((item)=>(
            <StoreItem key={item.id} {...item}/>
        ))}
    </section>
)
}

export default Store