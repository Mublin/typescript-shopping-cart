import { MouseEvent, ReactElement, createContext, useReducer } from "react"
import { Product, User } from "../data"

type initialStateType ={
    cart: Product[]
    userInfo: User | null
}

export const initialState = {
    cart: [],
    userInfo: null
}

const enum REDUCER_ACTION_TYPE{
    AddToCart,
    RemoveFromCart,
    DecrementFromCart,
    AddUser,
    PaymentSuccess
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: Product[] | User
}

const reducer = (state: initialStateType, action: ReducerAction): initialStateType =>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.AddToCart:
            return {...state, cart: action.payload as Product[]}
            case REDUCER_ACTION_TYPE.DecrementFromCart:
                return {...state, cart: action.payload as Product[]}
                case REDUCER_ACTION_TYPE.RemoveFromCart:
                    return {...state, cart: action.payload as Product[]}
                    case REDUCER_ACTION_TYPE.AddUser:
                    return {...state, userInfo: action.payload as User}
                    case REDUCER_ACTION_TYPE.PaymentSuccess:
                    return {...state, cart: action.payload as Product[]}
    
        default:
            return state;
    }
}

const useCartContext = (initialState: initialStateType)=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    



    const addTocartHandler =(newItem: Product):void =>{
        if (newItem.inStock === newItem.quantity) {
            alert("Item is out of stock")
            throw Error("Item is out of stock")
          }
        const existItem = state.cart.find((item : Product)=> item._id === newItem._id)
        // console.log(existItem)
        const cartItem = existItem ? state.cart.map((x)=>{
            return x._id === existItem._id ? newItem : x
        }) : [...state.cart, newItem]
        // console.log(cartItem)
        dispatch({
            type: REDUCER_ACTION_TYPE.AddToCart,
            payload: cartItem as Product[]
        })
    }
    const decreasecartHandler =(newItem: Product):void =>{
        const existItem = state.cart.find((item : Product)=> item._id === newItem._id)
        const cartItem = existItem ? state.cart.map((item)=>{
            return item._id === existItem._id ? newItem : item
        }) : [...state.cart, newItem]
        dispatch({
            type: REDUCER_ACTION_TYPE.DecrementFromCart,
            payload: cartItem as Product[]
        })
    }
    const removeFromCartHandler =(existItem: Product):void =>{
        const cartItems =  state.cart.filter((item : Product) =>
            item._id !== existItem._id )
        dispatch({
            type: REDUCER_ACTION_TYPE.RemoveFromCart,
            payload: cartItems
        })    
    }
    const addUserDetails = (user: User): void=>{
        dispatch({
            type: REDUCER_ACTION_TYPE.AddUser,
            payload: user
        })
    }
    const payment = ()=> {
        dispatch({
            type: REDUCER_ACTION_TYPE.PaymentSuccess,
            payload: []
        })
    }
    return {state, addUserDetails, addTocartHandler, decreasecartHandler, removeFromCartHandler, payment}
}
type useCartContextType = ReturnType<typeof useCartContext>

const initialContextState : useCartContextType = {
    state: initialState,
    addTocartHandler: ():void =>{},
    decreasecartHandler: ():void =>{},
    removeFromCartHandler: (): void => {},
    addUserDetails: (): void =>{},
    payment: (): void => {}
}

export const CartContext = createContext<useCartContextType>(initialContextState)

type ChildrenType ={
    children?: ReactElement | undefined
}
export const CartProvider = ({children, ...initialState}: ChildrenType & initialStateType): ReactElement=>{
    return <CartContext.Provider value={useCartContext(initialState)}>{children}</CartContext.Provider>
}