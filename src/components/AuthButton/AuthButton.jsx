import css from './AuthButton.module.css';

const AuthButton = ({ type, text }) => {
    return (
        <button className={css.button} type={type}>
            {text}
        </button>
    );
};

export default AuthButton;
