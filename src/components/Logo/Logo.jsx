import { Link } from 'react-router-dom';
import icons from '../../images/icons.svg';
import css from './Logo.module.css';

const Logo = () => {
    return (
        <Link to="/" className={css.logo}>
            <svg>
                <use href={`${icons}#icon-logo`}></use>
            </svg>
            Bookshelf
        </Link>
    );
};

export default Logo;
