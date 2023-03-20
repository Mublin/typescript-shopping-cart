import  Card from "react-bootstrap/Card"
import { Product } from "../data"
import {useContext} from "react"
import Button from "react-bootstrap/Button"
import { CartContext } from "../context/CartContext"
type ItemType= {
    name: string,
    price: number,
    quantity: number,
    _id: number,
    img: string,
    inStock: number
}

export default function ProductC({...item}: ItemType) {
    // console.log(item)
    const {state, addTocartHandler} = useContext(CartContext)
    const addingToCart = (item: Product)=>{
        const existItem = state.cart.find((product: Product)=>{
            return product._id === item._id
        })
        const quantity = existItem ? existItem.quantity + 1 : item.quantity = 1
        // console.log({...item, quantity})
        // console.log(state)
        addTocartHandler({...item, quantity})
    }
  return (
    <Card bg="secondary" style={{ width: "18rem", height: "400px", color: "white", display: "flex"}}>
        <Card.Img variant="top" src={item.img} style={{height:"200px"}} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Header>${item.price}</Card.Header>
            <div className="d-grid gap-2">
            <Button onClick={()=> addingToCart({...item})} variant="primary" size="lg">Add to Cart</Button>
            </div>
        </Card.Body>
    </Card>
  )
}
