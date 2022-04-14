import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <Footer></Footer>
        </div>
    );
};

export default Home;