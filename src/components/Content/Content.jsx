import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { chooseCategory } from '../../redux/category/slice';
import { useCategory } from '../../hooks/useCategory';
import { fetchBooksByCategory, fetchTopBooks } from 'service/bookshelf-api';
import TopBooks from 'components/TopBooks';
import BooksList from 'components/BooksList';
import colorTitle from 'helpers/colorTitle';
import css from './Content.module.css';

const Content = () => {
    const [topBooks, setTopBooks] = useState([]);
    const [categoryBooks, setCategoryBooks] = useState([]);
    const { category } = useCategory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (category === 'All categories' || category === '') {
            const getTopBooks = async () => {
                try {
                    const data = await fetchTopBooks();
                    setTopBooks([...data]);
                } catch (error) {
                    console.log(error.message);
                }
            };
            getTopBooks();
        } else {
            const getBooksByCategory = async () => {
                const data = await fetchBooksByCategory(category);
                setCategoryBooks(data);
            };

            getBooksByCategory();
        }
    }, [category]);

    useEffect(() => {
        return () => {
            dispatch(chooseCategory(''));
        };
    }, [dispatch]);

    const items = topBooks.map(({ list_name, books }) => (
        <TopBooks
            key={list_name}
            category={list_name}
            books={books}
        />
    ));

    return (
        <div className={css.content}>
            <div className={css.wrapper}>
                {(category === 'All categories' || category === '') ? (
                    <>
                        <h1
                            className={css.title}
                            dangerouslySetInnerHTML={{
                                __html: colorTitle('Best Sellers Books'),
                            }}
                        ></h1>
                        <ul className={css.topBooks}>{items}</ul>
                    </>
                ) : (
                    <>
                        <h1
                            className={css.title}
                            dangerouslySetInnerHTML={{ __html: colorTitle(category) }}
                        ></h1>
                        <BooksList books={categoryBooks} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Content;
