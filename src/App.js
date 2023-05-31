import React,{Fragment, useState} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";
import Cart from './Component/Cart/Cart';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      
      <main> <Meals/></main>
     
    </Fragment>
  );
}

export default App;
