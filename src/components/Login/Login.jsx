import { logIn } from '../../redux/auth';
import AuthModal from 'components/AuthModal';
import AuthInput from 'components/AuthInput';
import AuthButton from 'components/AuthButton';
import css from '../Register/Register.module.css';

const Login = () => {
    const button = <AuthButton type="submit" text="Sign up" />;
    return (
        <AuthModal button={button} auth={logIn}>
            {({ formData, handleChange }) => (
                <div className={css.wrapper}>
                    <AuthInput
                        type="email"
                        name="email"
                        autocomplete="email"
                        placeholder="Email"
                        icon="mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <AuthInput
                        type="password"
                        name="password"
                        autocomplete="new-password"
                        placeholder="Password"
                        icon="lock"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            )}
        </AuthModal>
    );
};

export default Login;
