import React from 'react';
import blank from '../../image/notFound/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>oops.! Page is not found...</h1>
            <img src={blank} alt="" />
        </div>
    );
};

export default NotFound;