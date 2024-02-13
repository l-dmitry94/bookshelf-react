import { useSelector } from 'react-redux';
import { selectCategory } from '../redux/category/selectors';

export const useCategory = () => {
    const category = useSelector(selectCategory);

    return {
        category,
    };
};
