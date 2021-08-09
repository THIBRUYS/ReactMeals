import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem'

import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const ctxCart = useContext(CartContext)

    const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler = (id) => {
        ctxCart.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        ctxCart.addItem({...item, amount: 1});
    };

    const cartItems = ctxCart.items.map((item) => (
        <li>
            <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)} 
            onAdd={cartItemAddHandler.bind(null, item)}
            />
        </li>
    ));
    const hasItems = ctxCart.items.length > 0

    return (
        <Modal onClose={props.onHide}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHide}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;