import CartIcon from './CartIcon'
import classes from './CartButton.module.css'

const CartButton = (props) => {
    return <button className={classes.button}>
        <span className={classes.icon}>
        <CartIcon /> 
        </span>
        <span> 
        Bag 
        </span>
        <span className={classes.badge}>  
        0
        </span> 
    </button>
}


export default CartButton