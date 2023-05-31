import React,{Fragment} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      
      <main> <Meals/></main>
     
    </Fragment>
  );
}

export default App;
