import { useState } from 'react';
import { useAuth } from 'hooks';
import icons from '../../images/icons.svg';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth';

const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const [isShowLogout, setIsShowLogout] = useState(false);

    const handleToggleButton = () => {
        setIsShowLogout(!isShowLogout);
    };

    return (
        <div className={css.wrapper}>
            <button className={css.profile} onClick={handleToggleButton}>
                <div className={css.avatar}>
                    <svg className={css.icon}>
                        <use href={`${icons}#icon-user`}></use>
                    </svg>
                </div>
                <p className={css.username}>{user.name}</p>
                <svg className={isShowLogout ? `${css.arrow} ${css.open}` : css.arrow}>
                    <use href={`${icons}#icon-arrow-profile`}></use>
                </svg>
            </button>
            {isShowLogout && (
                <button className={css.logout} onClick={() => dispatch(logOut())}>
                    Log out
                    <svg className={css.arrowLogout}>
                        <use href={`${icons}#icon-arrow-yellow`}></use>
                    </svg>
                </button>
            )}
        </div>
    );
};

export default UserMenu;
