import css from './Book.module.css';

const Book = ({ image, title, author }) => {
    return (
        <li className={css.item}>
            <img className={css.image} src={image} alt={title} />
            <h3 className={css.title}>{title}</h3>
            <p className={css.author}>{author}</p>
        </li>
    );
};

export default Book;
