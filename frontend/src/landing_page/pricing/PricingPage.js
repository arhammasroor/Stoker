import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        </>
     );
}

export default PricingPage;