import React,{Fragment, useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";
import Cart from './Component/Cart/Cart';
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      
      <main> <Meals/></main>
     
    </CartProvider>
  );
}

export default App;
