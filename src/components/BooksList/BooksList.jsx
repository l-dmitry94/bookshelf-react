import Book from 'components/Book';
import css from './BooksList.module.css';

const BooksList = ({ books }) => {
    const items = books.map(({ _id, book_image, title, author }) => (
        <Book key={_id} image={book_image} title={title} author={author} />
    ));

    return <ul className={css.list}>{items}</ul>;
};

export default BooksList;
