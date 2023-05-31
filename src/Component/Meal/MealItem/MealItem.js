import { useState } from 'react';
import classes from './MealItem.module.css';
const MealItem=(props)=>{

    const [enteredAmount,setEnteredAmount]=useState(0);

    const amountHandler=()=>{
        setEnteredAmount(enteredAmount+1);
    }
    const price=`$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <p>Amount  {enteredAmount}</p> <button onClick={amountHandler}>Add Item</button>
            </div>
        </li>
    )
}
export default MealItem;