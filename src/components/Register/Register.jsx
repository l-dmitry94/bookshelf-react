import { register } from '../../redux/auth';
import AuthButton from 'components/AuthButton';
import AuthInput from 'components/AuthInput';
import AuthModal from 'components/AuthModal';
import css from './Register.module.css';

const Register = () => {
    const button = <AuthButton type="submit" text="Sign up"/>;

    return (
        <AuthModal button={button} auth={register}>
            {({ formData, handleChange }) => (
                <div className={css.wrapper}>
                    <AuthInput
                        type="text"
                        name="name"
                        autocomplete="given-name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
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

export default Register;
