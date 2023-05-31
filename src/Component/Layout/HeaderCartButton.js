import React,{useContext} from 'react';
import CartIcon  from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

const  HeaderCartButton=(props)=> {

  const cartCtx=useContext(CartContext);

  const numberofItem=cartCtx.item.reduce((currentnumber,item)=>{
    return currentnumber+item.amount;
  },0);

  return (
    <button ClassName={classes.Button} onClick={props.onShowCart}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={classes.badge}>{numberofItem}</span>
    </button>
  )
}
export default HeaderCartButton
