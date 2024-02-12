import Categories from 'components/Categories';
import Support from 'components/Support';

const Home = () => {
    return (
        <div className="wrapper">
            <div className="left">
                <Categories />
                <Support />
            </div>
        </div>
    );
};

export default Home;
