import css from './ColorSwitcher.module.css';

const ColorSwitcher = () => {
    return (
        <button type="button" className={css.switcher}>
            <span className={css.control}></span>
        </button>
    );
};

export default ColorSwitcher;
