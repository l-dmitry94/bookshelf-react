import { useState } from 'react';
import fonds from 'data/fonds';
import icons from '../../images/icons.svg';
import fondsIndex from 'helpers/fondsIndex';
import css from './Support.module.css';

const Support = () => {
    const [showHiddenItems, setShowHiddenItems] = useState(false);

    const changeToggleButton = () => {
        setShowHiddenItems(!showHiddenItems);
    };
    const items = fonds.map(({ img, title, url }, index) => (
        <li
            key={index}
            className={showHiddenItems ? `${css.item} ${css.itemActive}` : css.item}
        >
            <a href={url} className={css.link} target="_blank" rel="noreferrer">
                <span className={css.index}>{fondsIndex(index + 1)}</span>
                <img className={css.image} src={img} alt={title} />
            </a>
        </li>
    ));

    return (
        <div className={css.fonds}>
            <h2 className={css.title}>
                Support Ukraine
                <svg className={css.icon}>
                    <use href={`${icons}#icon-herb`}></use>
                </svg>
            </h2>

            <ul className={css.list}>{items}</ul>

            <button type="button" className={css.button} onClick={changeToggleButton}>
                <svg className={showHiddenItems ? css.scrollIconActive : css.scrollIcon}>
                    <use href={`${icons}#icon-arrow-support`}></use>
                </svg>
            </button>
        </div>
    );
};

export default Support;
