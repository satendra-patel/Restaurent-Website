import React,{useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState={
    items:[],
    totalAmount:0
}

const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.items.concat(action.item)
        const updatedAmount=state.totalAmount+action.item.price*action.item.amount;
        return {
            items:updatedItems,
            totalAmount:updatedAmount
        }

    }
    return defaultCartState;
}

const CartProvider=(props)=>{

    const[cartState,dispatchAction]=useReducer(cartReducer,defaultCartState)

    const addItemToCartHandler=(item)=>{
        dispatchAction({
            type:'ADD',
            item:item
        })

    }

    const removeItemFormCartHandler=()=>{
        dispatchAction({
            type:'REMOVE',
            id:id
        })

    }
    const cartContext={
        item:cartState.items,
        totalamount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem:removeItemFormCartHandler
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>

}
export default CartProvider;