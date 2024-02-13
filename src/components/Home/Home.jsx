import Categories from 'components/Categories';
import Content from 'components/Content';
import Support from 'components/Support';
import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.left}>
                <Categories />
                <Support />
            </div>

            <Content />
        </div>
    );
};

export default Home;
