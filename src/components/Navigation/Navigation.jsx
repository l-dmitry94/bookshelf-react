import { NavLink } from 'react-router-dom';
import icons from '../../images/icons.svg';
import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <ul className={css.list}>
            <li className={css.item}>
                <NavLink to="/" className={css.link}>
                    Home
                </NavLink>
            </li>
            <li className={css.item}>
                <NavLink to="cart" className={css.link}>
                    Shopping list
                    <svg className={css.icon}>
                        <use href={`${icons}#icon-cart`}></use>
                    </svg>
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
