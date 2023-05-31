import React from 'react';
import CartIcon  from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const  HeaderCartButton=(props)=> {
  return (
    <button ClassName={classes.Button} onClick={props.onShowCart}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={classes.badge}>0</span>
    </button>
  )
}
export default HeaderCartButton
