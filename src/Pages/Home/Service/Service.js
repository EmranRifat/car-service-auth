import React from 'react';
import { useNavigate } from 'react-router';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description, price } = props.service;
    const navigate = useNavigate();

    const navigateServiceDetails = id => {
        navigate(`service/${id}`)

    }

    return (
        <div id='Services' className='service'>
            <img className='w-100 rounded ' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateServiceDetails(id)} className='btn-danger'>Book:{name}</button>
        </div>
    );
};

export default Service;