import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link, useLocation } from 'react-router-dom'
import { Product, products } from '../data'
import ProductC from '../components/ProductC'
import { Helmet } from 'react-helmet-async'

export default function SearchScreen() {
    const {search} =  useLocation()
    const sp = new URLSearchParams(search)
    const query = sp.get("query")
    const result = (words: string)=>{
        const searchResult = products.reduce((a: Product[],c: Product)=>{
            if (words !== "" && (c.name).includes(words)) {
                a.push(c)
            }
            // console.log(a)w2
            return a
        },[])
        return searchResult
    }
    const searchResult = result(query as string)
    // console.log(searchResult)
  return (<div>
    <Helmet>
            <title>Kano-Market Search</title>
        </Helmet>
    <div style={{display: "flex", alignItems: "baseline"}}>
    <h1 style={{marginRight: ".2rem"}}>Showing result of:</h1><p style={{fontWeight: "bold"}}>{query}</p></div>
    <div className="cards">
        <div className="card-item">
    {searchResult.length === 0 ? <h2>No item found</h2> : (searchResult.map((item)=>(
            <div className="card-cont" key={item._id}> <ProductC {...item}  /></div>
        )))}
        </div>
    </div>
        </div>
  )
}