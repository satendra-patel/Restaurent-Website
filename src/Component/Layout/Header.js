import React from 'react'
import classes from './Header.module.css';
import Mealimage from '../../Assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header=()=> {
  return (
    <React.Fragment >
        <header className={classes.header}>
            <h3>Meals</h3>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={Mealimage} alt='meals image'/>
        </div>
    </React.Fragment>
  )
}

export default Header