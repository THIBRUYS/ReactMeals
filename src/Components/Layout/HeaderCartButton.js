import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

    const [buttonIsHighilighted, setbuttonIsHighilighted] = useState(false);

    const ctxCart = useContext(CartContext);
    const { items } = ctxCart

    const itemsNumber = items.reduce((curNumber, item) => {
        return (curNumber + item.amount)
    }, 0)

    const btnClasses = `${classes.button} ${buttonIsHighilighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setbuttonIsHighilighted(true);

        const timer = setTimeout(() => {
            setbuttonIsHighilighted(false)
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [items]) 

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{itemsNumber}</span>
        </button>
    );
};

export default HeaderCartButton;