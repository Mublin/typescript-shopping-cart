import './App.css'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import About from './screens/About'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
// import { CounterProvider, initState } from './context/CounterContext'
import { CartContext } from './context/CartContext'
import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { Product, products } from './data'
import ProductC from './components/ProductC'
import SearchScreen from './screens/SearchScreen'
import { Helmet } from 'react-helmet-async'



function App() {
  const {state} = useContext(CartContext)
  const [search, setsearch] = useState<string>("")
  const searchHand = (e: ChangeEvent<HTMLInputElement>) => setsearch(e.target.value)
  const searchHandler = (userInput: string)=>{
    const searchItems = products.reduce((acc: Product[], item: Product)=>{
      if (userInput !== "" && (item.name).includes(userInput)) {
        acc.push(item)
      }
      return acc
    }, [])
    return searchItems
  }
  // console.log(state.cart.reduce((a : number,c: Product)=> a+c.quantity, 0))
  const result = searchHandler(search)
  // console.log(state)
  return (
    // <CounterProvider count={initState.count} text={initState.text}>
   
      <div className='width'>
    <BrowserRouter>
    <div>
    <Helmet>
            <title>Mubarak Shopping Cart</title>
      </Helmet>
      <div className="nav">
      <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Link to={"/"} style={{textDecoration: "none"}}><Navbar.Brand>Shopping Cart</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/"} className='nav-tools link'><Nav.Item>Home</Nav.Item></Link>
            <Link to={"/cart"} className='nav-tools link'><Nav.Item style={{position: "relative"}}>Cart {state.cart.length === 0 ? <></> : <p  style={{ position: "absolute", top: "10px", left:"25px", width: "20px", height: "20px", borderRadius: "10px", color: "white",display: "flex", alignItems: "center", justifyContent:"center", backgroundColor: "red",}}>{state.cart.reduce((a : number,c: Product) => a+c.quantity, 0)}</p>}</Nav.Item></Link>
            <Link to={"/about"} className='nav-tools link'><Nav.Item>About</Nav.Item></Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              id="search"
              placeholder="Search"
              className="me-2"
              onChange={searchHand}
              aria-label="Search"
            />
            <Link to={`/search?query=${search}`}><Button variant="outline-success" onClick={()=>searchHandler(search)}>Search</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/cart' element={<CartScreen />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<SearchScreen />} />
        </Routes>
      </main>
      <div className="footer">
        <footer>
          <h3>All rights reserved</h3>
        </footer>
      </div>
    </div>
    </BrowserRouter>
    </div>
    // </CounterProvider>
  )
}

export default App
