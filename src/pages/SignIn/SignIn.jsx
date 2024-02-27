
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import '../SignIn/signIn.scss';

const SignIn = () => {

    const [isRegisteredUser, setIsRegisteredUser] = useState(null);
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const [serverError, setServerError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsRegisteredUser(user);
        });

        return () => unsubscribe();
    }, []);


    const schema = z.object({
        email: z.string().email('Email must be a valid email'),
        password: z.string().min(6, 'Password must be at least 6 characters').max(16, 'Password must not exceed 16 characters'),
    });

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm({
        resolver: zodResolver(schema),
    });


    const onSubmit = async (data) => {
        await new Promise((resolver) => setTimeout(resolver, 1000));
        try {
            if (isSignUpActive) {
                handleSignUp(data);

            } else {
                handleSignIn(data);
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

            setServerError(errorMessage);
        }

    };

    const handleSignUp = async ({ email, password }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setServerError('');
            reset();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            setServerError(errorMessage);
        }

    };

    const handleSignIn = async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, googleProvider);
            const user = userCredential.user;
            setServerError('');
            reset();
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode.includes('auth/invalid-credential')) {
                setServerError('Email or password is incorrect');
            } else {
                setServerError('An unexpected error occurred. Please try again.');
                console.error(errorCode, errorMessage);
            }
        }
    };

    const signInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            const user = userCredential.user;            
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("Sign Out"))
            .catch((error) => console.error(error));
    };

    const handleResetPassword = () => {
        const email = prompt('Please enter your emal');
        sendPasswordResetEmail(auth, email);
        email ?
            alert('Email sent! Check your inbox for password reset instructions and then go back to sign in again with your new password. We are waiting for you!')
            :
            alert('Password reset canceled.');
    };

    return (
        <>
            <section className="login-wrapper">


                {!isRegisteredUser ? (
                    <>
                        <header className="login-header">
                            <h5>
                                Welcome!
                            </h5>

                            <h6>
                                <a
                                    className="sign-in-link"
                                    onClick={() => setIsSignUpActive(true)}>
                                    Create an account
                                </a> or  <a
                                    className="sign-in-link"
                                    onClick={() => setIsSignUpActive(false)}>
                                    Log in
                                </a>
                            </h6>                            
                        </header>

                        <div className="form-wrapper">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {isSignUpActive && <legend className="title-sign-in"> Create an account</legend>}
                                {!isSignUpActive && <legend className="title-sign-in"> Log In</legend>}
                                {serverError.includes('auth/email-already-in-use')
                                    ? (
                                        <p className='error-message'>
                                            Such a user is already registered. Maybe you want to <a onClick={() => setIsSignUpActive(false)}>
                                                Log in
                                            </a> ?
                                        </p>

                                    )
                                    : (
                                        <p className='error-message'>
                                            {serverError}
                                        </p>
                                    )
                                }
                                <div className="input-wrapper">
                                    <input
                                        {...register('email')}
                                        className="input" name="email"
                                        autoComplete="on"
                                        type="text"
                                        placeholder="Your Email"
                                        autoFocus />
                                    <div className='error-message'>
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="input-wrapper">
                                    <input
                                        {...register('password')}
                                        className="input"
                                        id='password'
                                        name="password"
                                        autoComplete="on" type="password" placeholder="Your Password" />
                                    <div className='error-message'>
                                        {errors.password && <p>{errors.password.message}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="login-btn">
                                    <span>
                                        {
                                            isSubmitting ? "Loading..." :
                                                (isSignUpActive ? 'Create an account' : 'Log In')
                                        }
                                    </span>
                                </button>


                            </form>
                                <button
                                className="google-btn"
                                onClick={signInWithGoogle}>
                                    Sign in with Google
                                </button>
                        </div>
                        <p
                            onClick={handleResetPassword}
                            className="forgot-password">
                            Forgot Password?
                        </p>
                    </>

                ) : (
                    <>
                        <h5 className="title is-5">
                            You have successfully registered!
                        </h5>
                        
                        <Link to={'/'} className="sign-out" onClick={handleSignOut}>
                            Sign out
                        </Link>
                    </>
                )
                }
            </section>
        </>
    );
}

export default SignIn;