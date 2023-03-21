import React, { ChangeEvent, useContext, useState, MouseEvent } from 'react'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


export default function UserInfoScreen() {
    const { state, addUserDetails } = useContext(CartContext)
    const navigate = useNavigate()
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const submitHandler = (e: MouseEvent<HTMLFormElement>): void =>{
        e.preventDefault()
        const user = {
            name,
            email
        }
        addUserDetails(user)
        navigate("/checkout")
    }
    // console.log(state)
  return (
    <div>
        <Form onSubmit={submitHandler} style={{ maxWidth: "85dvw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <h2>Buyer Information</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" required minLength={5} defaultValue={state.userInfo ? state.userInfo.name : name} onChange={(e: ChangeEvent<HTMLInputElement>)=> setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required defaultValue={state.userInfo?.email ? state.userInfo.email : email} onChange={(e: ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
