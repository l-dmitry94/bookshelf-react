import icons from '../../images/icons.svg';
import css from './AuthInput.module.css';

const AuthInput = ({ type, name, autocomplete, placeholder, icon, value, onChange }) => {
    return (
        <div className={css.wrapper}>
            <input
              className={css.input}
                type={type}
                name={name}
                autoComplete={autocomplete}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {icon && (
                <svg className={css.icon}>
                    <use href={`${icons}#icon-${icon}`}></use>
                </svg>
            )}
        </div>
    );
};

export default AuthInput;
