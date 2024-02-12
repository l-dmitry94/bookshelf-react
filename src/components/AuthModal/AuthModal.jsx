import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthNavigation from 'components/AuthNavigation';
import icons from '../../images/icons.svg';
import css from './AuthModal.module.css';

const initialState = {
    name: '',
    email: '',
    password: '',
};

const AuthModal = ({ auth, button, children }) => {
    const modal = document.getElementById('auth-modal');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ ...initialState });
    const dispatch = useDispatch();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.currentTarget;

        if (!formData.name) {
            dispatch(
                auth({
                    email: form.elements.email.value,
                    password: form.elements.password.value,
                })
            );
            setFormData({ ...initialState });
            return;
        }

        dispatch(
            auth({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );

        setFormData({ ...initialState });
    };

    useEffect(() => {
        const handleEscapeKeyPress = event => {
            if (event.key === 'Escape') {
                navigate('/');
            }
        };

        window.addEventListener('keydown', handleEscapeKeyPress);

        return () => {
            window.removeEventListener('keydown', handleEscapeKeyPress);
        };
    }, [navigate]);

    const handleBackDropClick = ({ currentTarget, target }) => {
        if (currentTarget === target) {
            navigate('/');
        }
    };

    return createPortal(
        <div className={css.overlay} onMouseDown={handleBackDropClick}>
            <div className={css.modal}>
                <Link to="/" className={css.close}>
                    <svg className={css.icon}>
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
                </Link>
                <form className={css.form} onSubmit={handleSubmit}>
                    {children({ formData, handleChange })}
                    {button}
                    <AuthNavigation />
                </form>
            </div>
        </div>,
        modal
    );
};

export default AuthModal;
