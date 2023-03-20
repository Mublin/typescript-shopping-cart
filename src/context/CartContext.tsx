import { MouseEvent, ReactElement, createContext, useReducer } from "react"
import { Product } from "../data"

type initialStateType ={
    cart: Product[]
}

export const initialState = {
    cart: []
}

const enum REDUCER_ACTION_TYPE{
    AddToCart,
    RemoveFromCart,
    DecrementFromCart
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload: Product[]
}

const reducer = (state: initialStateType, action: ReducerAction): initialStateType =>{
    switch (action.type) {
        case REDUCER_ACTION_TYPE.AddToCart:
            return {...state, cart: action.payload}
            case REDUCER_ACTION_TYPE.DecrementFromCart:
                return {...state, cart: action.payload}
                case REDUCER_ACTION_TYPE.RemoveFromCart:
                    return {...state, cart: action.payload}
    
        default:
            return state;
    }
}

const useCartContext = (initialState: initialStateType)=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    



    const addTocartHandler =(newItem: Product):void =>{
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
    return {state, addTocartHandler, decreasecartHandler, removeFromCartHandler}
}
type useCartContextType = ReturnType<typeof useCartContext>

const initialContextState : useCartContextType = {
    state: initialState,
    addTocartHandler: ():void =>{},
    decreasecartHandler: ():void =>{},
    removeFromCartHandler: (): void => {}
}

export const CartContext = createContext<useCartContextType>(initialContextState)

type ChildrenType ={
    children?: ReactElement | undefined
}
export const CartProvider = ({children, ...initialState}: ChildrenType & initialStateType): ReactElement=>{
    return <CartContext.Provider value={useCartContext(initialState)}>{children}</CartContext.Provider>
}