import { Fragment } from 'react';
import headerImage from '../../assets/reactMealsHeader.jpg';

import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={headerImage} alt='refresh the page if it does not load'/>
            </div>
        </Fragment>
    );
};

export default Header;