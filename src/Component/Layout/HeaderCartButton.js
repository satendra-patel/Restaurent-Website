import React from 'react';
import CartIcon  from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton() {
  return (
    <button ClassName={classes.Button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Cart</span>
        <span className={classes.badge}>0</span>
    </button>
  )
}
