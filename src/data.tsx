export type Product ={
    name: string,
    price: number,
    quantity: number,
    readonly _id: number,
    img: string,
    inStock: number
}

export const products : Product[] =[{
    name: "Nike Tshirt",
    price: 1700,
    quantity: 0,
    _id : 1,
    img: "https://th.bing.com/th/id/R.093fef255f6f1762881f5495d190ca5e?rik=KWI5Yj2p6TzRdA&riu=http%3a%2f%2fstatic.soposted.com%2fuploads%2f2018%2f02%2fAcer-aspire.jpg&ehk=3byy7%2bZhZcTJnhmtA9L%2bMQif%2bOBukkMX%2bWfBlaUeWGA%3d&risl=&pid=ImgRaw&r=0",
    inStock: 5
},
{
    name: "Puma boots",
    price: 8000,
    quantity: 0,
    _id : 2,
    img: "https://th.bing.com/th/id/OIP.clPbmLik9eZKQGO4KM8T6AHaE8?pid=ImgDet&rs=1",
    inStock: 3
},
{
    name: "abidos Tshirt",
    price: 800,
    quantity: 0,
    _id : 3,
    img: 'https://th.bing.com/th/id/R.7682ce807463e1e0cae61881a2512904?rik=aHNiGtORDuxGRA&pid=ImgRaw&r=0',
    inStock: 6
},
{
    name: "Nike jeans",
    price: 3200,
    quantity: 0,
    _id : 4,
    img: "https://images.hotukdeals.com/info-block/info_block_gallery/default/20453867701596552031.jpg",
    inStock: 5
},
]