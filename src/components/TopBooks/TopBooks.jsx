import BooksList from 'components/BooksList';
import css from './TopBooks.module.css';

const TopBooks = ({ category, books }) => {

    return (
        <li className="item">
            <p className={css.category}>{category}</p>
            <BooksList books={books} />
        </li>
    );
};

export default TopBooks;
