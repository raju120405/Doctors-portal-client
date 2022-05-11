import React from 'react';
import Banner from './Banner';
import ContactWithUs from './ContactWithUs';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactWithUs></ContactWithUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;