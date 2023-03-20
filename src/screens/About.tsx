import React from 'react'
import { Helmet } from 'react-helmet-async'
import Card from "react-bootstrap/Card"

export default function About() {
  return (<div style={{ margin: "0 3rem 0 3rem", padding: "3rem 2rem 0 0", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Helmet>
            <title>Kano-Market About</title>
        </Helmet>
        <Card className="text-center">
      <Card.Body style={{display: "flex", flexDirection: "column"}}>
        <Card.Title>About Kano-Market</Card.Title>
        <Card.Text style={{ margin: "0 4rem 0 4rem"}}>
        Welcome to our e-commerce website!

Our website is dedicated to providing you with the best online shopping experience possible. We offer a wide range of products from various categories, including electronics, fashion, beauty, home, and more. Our goal is to make shopping easy, convenient, and affordable for our customers.

We take pride in our high-quality products and exceptional customer service. <br /> Our team is dedicated to ensuring that you receive the best possible service from start to finish. We believe in building long-term relationships with our customers and strive to exceed their expectations with every interaction.

At our e-commerce website, we prioritize your safety and security. <br /> We have implemented industry-standard security measures to ensure that your personal and financial information is always protected. We also offer a variety of payment options to suit your needs and preferences.

We are committed to providing you with the best prices on the market. We regularly offer discounts and promotions on our products, so be sure to check our website regularly for the latest deals.

If you have any questions or concerns, our customer service team is always available to assist you. <br /> We are dedicated to ensuring that you are completely satisfied with your shopping experience.

Thank you for choosing our e-commerce website. We look forward to serving you and providing you with the best shopping experience possible.



        </Card.Text>
      </Card.Body>
    </Card>
     

    </div>
  )
}
