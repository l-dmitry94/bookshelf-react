import { useEffect, useState } from 'react';
import { fetchCategories } from 'service/bookshelf-api';
import css from './Categories.module.css';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                const sortedCategories = data.sort((firstCategory, secondCategory) =>
                    firstCategory.list_name.localeCompare(secondCategory.list_name)
                );
                setCategories([
                    {
                        list_name: 'All categories',
                    },
                    ...sortedCategories,
                ]);
            } catch (error) {
                console.log(error.message);
            }
        };

        getCategories();
    }, []);

    const changeActiveIndex = (index) => {
        setActiveIndex(index);
    };

    const items = categories.map(({ list_name }, index) => (
        <li
            key={index}
            className={index === activeIndex ? `${css.item} ${css.active}` : css.item}
            onClick={() => changeActiveIndex(index)}
        >
            {list_name}
        </li>
    ));

    return <ul className={css.list}>{items}</ul>;
};

export default Categories;
