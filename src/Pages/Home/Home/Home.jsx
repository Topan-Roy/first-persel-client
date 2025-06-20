import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';
import FAQ from '../FAQ/FAQ';
import HowItWorks from '../HowItWork/HowItWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Benefits></Benefits>
            <BeMerchant></BeMerchant>
            <TestimonialSlider></TestimonialSlider>
            <FAQ></FAQ>
            
        </div>
    );
};

export default Home;