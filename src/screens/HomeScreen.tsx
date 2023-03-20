import { ChangeEvent, useContext, useEffect, useState } from "react";
// import { counterContext } from "../context/CounterContext";
import { Product, products } from "../data";
import { CartContext } from "../context/CartContext";
import ProductC from "../components/ProductC";
import { Helmet } from "react-helmet-async";
import Carousel  from "react-bootstrap/Carousel";


type UseCounterType = {
    count: number
    text: string
    increment: ()=> void
    decrement: ()=> void 
    textHandler: (e: ChangeEvent<HTMLInputElement>)=> void
}
type useCartType ={
    cart: Product[] | []
    addTocartHandler: (item: Product)=> void
    decreasecartHandler: (item: Product) => void
    removeFromCartHandler: (item: Product)=> void 
}
export default function HomeScreen() {
    // const [counter, setCounter] = useState(0)
    const {state, addTocartHandler} = useContext(CartContext)
    const addingToCart = (item: Product)=>{
        const existItem = state.cart.find((product)=>{
            return product._id === item._id
        })
        const quantity = existItem ? existItem.quantity + 1 : item.quantity = 1
        // console.log({...item, quantity})
        // console.log(state)
        addTocartHandler({...item, quantity})
    }
    // const useCounter = (): UseCounterType =>{
    //     const { state, increment, decrement, textHandler} = useContext(counterContext)
    //     const {count, text} = state
    //     return {count, text, increment, decrement, textHandler}
    // }
    // const {count, increment, decrement, textHandler, text} = useCounter()
    // // let counter = 0
    const sliderArray = products.reduce((a: string[], c : Product): string[]=> {
        a.push(c.img)
        return a
    } 
        ,[])
    //     const productLength = sliderArray.length
    //     // console.log(productLength)
    //     let counter = 0
    // const imageChange = setInterval(()=>{
    //     if (counter >= productLength) {
    //         counter = 0
    //     }
    //     counter = counter + 1
    // }, 3000)
    // useEffect(() => {
    //     imageChange
        
    // }, [imageChange])
    
    
    // console.log(counter)
  return (
    <div className="cards">
        <Helmet>
            <title>Kano-Market</title>
        </Helmet>
    <Carousel>
    {sliderArray.map(x=>(
        <Carousel.Item >
        <img
          className="d-block w-100"
          style={{height: "80dvh"}}
          src={x}
          alt="First slide"
        />
      </Carousel.Item>
        ))}
    </Carousel>
        <div className="card-item">
        {products.map((item)=>(<div className="card-cont" key={item._id}> <ProductC {...item}  /></div>
           
        ))}
        </div>
    </div>
  )
}
