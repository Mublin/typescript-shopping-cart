import { ChangeEvent, ReactElement, createContext, useReducer } from "react"




// type StateType = {
//     count: number,
//     text: string
// }
// export const initState: StateType = {
//     count: 0,
//     text: ""
// }
// const enum REDUCER_ACTION_TYPE{
//     Increment,
//     Decrement,
//     textInputHandle
// }

// type ReducerAction = {
//     type: REDUCER_ACTION_TYPE,
//     payload: string | number
// }

// const reducer = (state: StateType, action: ReducerAction): StateType=>{
//     switch (action.type) {
//         case REDUCER_ACTION_TYPE.Increment:
//             return {...state, count: action.payload as number}
//             case REDUCER_ACTION_TYPE.Decrement:
//                 return {...state, count: action.payload as number}
//                 case REDUCER_ACTION_TYPE.textInputHandle:
//                     return {...state, text: action.payload as string}
    
//         default:
//             return state;
//     }
// }

// const useCounterContext = (initState: StateType)=>{
//     const [state, dispatch] = useReducer(reducer, initState)

//     const increment = (): void => {
//         dispatch({type: REDUCER_ACTION_TYPE.Increment,
//         payload: state.count + 1})
//         }
//     const decrement = (): void =>{ 
//             dispatch({type: REDUCER_ACTION_TYPE.Decrement,
//             payload: state.count - 1})
//     }
//     const textHandler = (e: ChangeEvent<HTMLInputElement>)=>{
//             dispatch({type: REDUCER_ACTION_TYPE.textInputHandle,
//             payload: e.target.value})
            
//     }
//     return {state, increment, decrement, textHandler}
// }


// type useCounterContextType = ReturnType<typeof useCounterContext>
// const initialContextState : useCounterContextType = {
//     state: initState,
//     increment: ()=>{},
//     decrement: ()=>{},
//     textHandler: (e: ChangeEvent<HTMLInputElement>)=>{}
// }
// export const counterContext = createContext<useCounterContextType>(initialContextState)
// type ChildrenType = {
//     children?: ReactElement | undefined
// }
// export const CounterProvider = ({children, ...initState}: ChildrenType & StateType): ReactElement =>{
//     return <counterContext.Provider value={useCounterContext(initState)}>
//        {children}
//     </counterContext.Provider>
// }



