import {createContext , useState , useContext, useEffect} from 'react'
import data from '../data/data';

type props = {
    children: React.ReactNode
}

type items = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    amount: number;
    text: string;
}

type ShoppingCartContext = {
    items:items[];
    amount:number
    handleAdd: (id:number) => void
    handleRemove: (id:number) => void
    increase: (id:number) => void
    decrease: (id:number) => void
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    cartItems: items[]
    setCartItems: React.Dispatch<React.SetStateAction<items[]>>
}


export const AppProvider = createContext({} as ShoppingCartContext)


export default function Context ({children}:props) {
    const [items , setItems] = useState<items[]>(data)
    const [cartItems , setCartItems] = useState<items[]>([])
    const [amount , setAmount] = useState(0)
    const [isOpen , setIsOpen] = useState(false)



    const handleAdd = (id:Number) => {
        setItems(items.map((item)=> 
        item.id === id ?{...item , amount: item.amount + 1}: item
        ))
    } 

    const handleRemove = (id:number) => {
        setItems(items.map((item)=> 
        item.id === id ?{...item , amount: item.amount = 0 }: item
        ))
    }

    const increase = (id:number) => {
        const newitems = items.map((item)=>{
            if (item.id === id) {
                return {...item , amount:item.amount + 1}
            } 
            return item
        })
        setItems(newitems)
    }

    const decrease = (id:number) => {
        const newitems = items.map((item)=>{
            if (item.id === id) {
                return {...item , amount:item.amount - 1}
            } 
            return item
        })
        setItems(newitems)
    }

    useEffect(()=>{
        setCartItems(items.filter((item)=> item.amount > 0 ))
        let amount = 0
        items.map((item) => {
            amount += item.amount 
        })
        setAmount(amount)
    },items)


    return(
        <AppProvider.Provider value={{
            items,
            amount,
            handleAdd,
            handleRemove,
            increase,
            decrease,
            setIsOpen,
            isOpen,
            cartItems,
            setCartItems
        }}>
            {children}
        </AppProvider.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppProvider)
}