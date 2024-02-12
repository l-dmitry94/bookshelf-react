import { Outlet } from 'react-router-dom';

import { useAuth } from 'hooks';
import Navigation from 'components/Navigation';
import Logo from 'components/Logo';
import ColorSwitcher from 'components/ColorSwitcher';
import AuthNav from 'components/AuthNav';
import Container from 'components/Container';
import UserMenu from 'components/UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <header className={css.header}>
                <Container>
                    <div className={css.wrapper}>
                        <div className={css.left}>
                            <Logo />
                            {isLoggedIn && <Navigation />}
                        </div>

                        <div className={css.right}>
                            <ColorSwitcher />
                            {isLoggedIn ? <UserMenu /> : <AuthNav />}
                        </div>
                    </div>
                </Container>
            </header>

            <main className={css.main}>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    );
};

export default AppBar;
