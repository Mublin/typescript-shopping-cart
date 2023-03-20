import React, { useContext, MouseEvent } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Product } from '../data'
import Card from "react-bootstrap/Card"
import { Helmet } from 'react-helmet-async'



export default function CartScreen() {
  const {state: Cstate, addTocartHandler, decreasecartHandler, removeFromCartHandler} = useContext(CartContext)
  const addingToCart = (item: Product)=>{
    if (item.inStock === item.quantity) {
      alert("Item is out of stock")
      throw Error("Item is out of stock")
    }
    const existItem = Cstate.cart.find((product: Product)=>{
        return product._id === item._id
    })
    const quantity = existItem ? existItem.quantity + 1 : item.quantity = 1
    // console.log({...item, quantity})
    // console.log(state)
    addTocartHandler({...item, quantity})
}
  const decreaseItem = (item: Product)=>{
    if (item.quantity === 1) {
      return removeFromCartHandler(item)}
    const existItem = Cstate.cart.find((product: Product)=>{
      return product._id === item._id
  })
  const quantity = existItem!.quantity - 1
  // console.log({...item, quantity})
  // console.log(state)
  decreasecartHandler({...item, quantity})
}
  // console.log(Cstate.cart)
  return (<div>
    <Helmet>
            <title>Kano-Market Cart</title>
        </Helmet>
    <h1>Cart items</h1>
        {Cstate.cart.length === 0 ? <Link to={"/"}><h3>Go Shopping</h3></Link> : Cstate.cart.map((item)=>(
        <Card key={item._id}>
      <Card.Body>
        <div className='cart-photo'>
        <Card.Img variant="top" src={item.img} style={{height:"50px", width: "80px"}} />
        </div>
        <div className='cart-item-price'>
            <div className="item-price">{item.price}</div>
        </div>
        <div className="item-quantity">
            {item.quantity <= 1 ? <button onClick={()=>decreaseItem(item)} disabled >-</button> : <button onClick={()=>decreaseItem(item)}>-</button> }   <h3>{item.quantity}</h3> <button onClick={()=>addingToCart(item)}>+</button>
        </div>
      </Card.Body>
    </Card>
        ))}
        <h1>
          Total Price:
        </h1>
        <h3>NGN{Cstate.cart.reduce((a : number, c: Product): number=> {
          if (Cstate.cart.length !== 0){
           return (c.price * c.quantity) + a
           } else{
            return a
           }
          //  return a
          },0)
        }</h3>
        </div>
  )
}
