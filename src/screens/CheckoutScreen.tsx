import React, { useContext, MouseEvent } from 'react'
import { CartContext } from '../context/CartContext'
import { Product } from '../data'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Helmet } from 'react-helmet-async'
import { PaystackButton } from 'react-paystack'
import { Link } from 'react-router-dom'
import { callback } from 'react-paystack/dist/types'

export default function CheckoutScreen() {
    const {state: Cstate, payment} = useContext(CartContext)
    const config ={
        reference: (new Date()).getTime().toString(),
        email: "mubleen@gmail.com",
        amount: Cstate.cart.reduce((a : number, c: Product): number=> {
            if (Cstate.cart.length !== 0){
             return (c.price * c.quantity) + a
             } else{
              return a
             }
            //  return a
            },0) * 100,
        publicKey: "pk_test_bdae6e992538ff698b264317e823fc9274bd793c"
      }
      const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        alert("closed")
        console.log('closed')
      }
      
      
      const handlePaystackSuccessAction = (reference: string) => {
        // Implementation for whatever you want to do with reference and after success call.
        window.alert("Payment Successful")
        payment()
      }
      
      const componentProps = {
          ...config,
          text: 'Paystack Payment Gateway',
          onSuccess: (reference: any): void => handlePaystackSuccessAction(reference),
          onClose: handlePaystackCloseAction,
      };
  return (
    <div>
        <Helmet>
            <title>Kano-Market Checkout</title>
        </Helmet>
        {Cstate.cart.length === 0 ? <Link to={"/"}>Go Shopping</Link> : (<div>
            <h2>Item summary</h2>
        {Cstate.cart.map((item)=>(
        <Card key={item._id}>
      <Card.Body>
        <div className='cart-photo'>
        <Card.Img variant="top" src={item.img} style={{height:"50px", width: "80px"}} />
        </div>
        <div className='cart-item-price'>
            <div className="item-price">{item.price}</div>
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
        </div>)}
    {Cstate.cart.length === 0 ? <></> : <PaystackButton {...componentProps as { 
    text: string;
    onSuccess: ({reference} as callback) => void;
    onClose: () => void;
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
}} />}
    </div>
  )
}
