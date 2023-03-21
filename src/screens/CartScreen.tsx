import React, { useContext, MouseEvent } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Product } from '../data'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Helmet } from 'react-helmet-async'
import { PaystackButton } from 'react-paystack'


export default function CartScreen() {
  const {state: Cstate, addTocartHandler, decreasecartHandler, removeFromCartHandler} = useContext(CartContext)
  const addingToCart = (item: Product)=>{
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

const config ={
  reference: (new Date()).getTime().toString(),
  email: "mubleen@gmail.com",
  amount: 3000000,
  publicKey: "pk_test_bdae6e992538ff698b264317e823fc9274bd793c"
}


const handlePaystackCloseAction = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}


const handlePaystackSuccessAction = (reference: string) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  console.log("click")
};

const componentProps = {
    ...config,
    text: 'Paystack',
    onSuccess: (reference : string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};



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
        <div className="d-grid gap-2">
        {Cstate.cart.length === 0 ? <></> : <Link to={"/cartinfo"} style={{textDecoration: "none"}}><Button variant="primary" size="lg">
        Proceed to checkout
      </Button></Link>}
    </div>
        </div>
  )
}
