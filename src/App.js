import React,{Fragment} from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meals";

function App() {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
