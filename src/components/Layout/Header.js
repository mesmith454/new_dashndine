import { Fragment } from 'react'
import CartButton from './CartButton'

import foodImage from '../../assets/food_background.jpg'
import classes from './Header.module.css'


const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Dash & Dine</h1>
            <button><CartButton/></button>
        </header>
        <div className={classes['main-image']}>
            <img src={foodImage} alt=""/>
        </div>
    </Fragment>
}


export default Header