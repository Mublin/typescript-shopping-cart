import {useContext, ReactElement} from "react"
import { CartContext } from "../context/CartContext"
import { Navigate } from "react-router-dom"

type ChildrenType = {
    children: ReactElement
}
export default function ProtectedRoute({children}: ChildrenType) {
    const { state } = useContext(CartContext)
    const {userInfo} = state
  return userInfo?.name ? children : <Navigate to={"/cartInfo"} />
}
