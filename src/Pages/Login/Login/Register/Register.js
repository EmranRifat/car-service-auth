import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { useNavigate } from 'react-router';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../Firebase.init';



const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');

    }

    if (user) {
        navigate('/home');
    }


    const handleRegister = event => {

        event.preventDefault();

        const name = (event.target.name.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);

        createUserWithEmailAndPassword(email, password, name);
    }


    return (

        <div className='register'>

            <h2 style={{ textAlign: 'center', color: 'orange' }}>Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1" placeholder='Your Name' />

                <input type="email" name="email" id="2" placeholder='Your Email' />

                <input type="password" name="password" id="3" placeholder='Your Password' />

                <input type="submit" value="Register" />
                <p> Already have an Account? <Link to="/login" className='text-danger pe-auto' onClick={navigateLogin}>Please Login</Link></p>

            </form>

        </div >

    );
};

export default Register;