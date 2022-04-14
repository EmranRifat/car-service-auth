import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import { useNavigate } from 'react-router';


const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');

    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register'>

            <h2 style={{ textAlign: 'center', color: 'orange' }}>Register here</h2>
            <form onClick={handleRegister}>
                <input type="text" name="" id="" placeholder='Your Name' />

                <input type="email" name="" id="" placeholder='Your Email' />

                <input type="password" name="" id="" placeholder='Your Password' />

                <input type="submit" value="Register" />
                <p> Already have an Account? <Link to="/login" className='text-danger pe-auto' onClick={navigateLogin}>Please Login</Link></p>



            </form>


        </div >

    );
};

export default Register;