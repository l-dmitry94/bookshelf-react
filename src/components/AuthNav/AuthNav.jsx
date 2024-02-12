import { Link } from 'react-router-dom';
import icons from '../../images/icons.svg';
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <Link to="register" className={css.auth}>
            Sign up
            <svg className={css.icon}>
                <use href={`${icons}#icon-arrow-yellow`}></use>
            </svg>
        </Link>
    );
};

export default AuthNav;
