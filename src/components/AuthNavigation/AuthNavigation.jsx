import { NavLink } from 'react-router-dom';
import css from './AuthNavigation.module.css';
const AuthNavigation = () => {
    return (
        <ul className={css.list}>
            <li className={css.item}>
                <NavLink to="/register" className={css.link}>
                    sign up
                </NavLink>
            </li>
            <li className={css.item}>
                <NavLink to="/login" className={css.link}>
                    sign in
                </NavLink>
            </li>
        </ul>
    );
};

export default AuthNavigation;
