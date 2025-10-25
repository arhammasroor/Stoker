import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everyThing</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

                    Sign up for free</p>
                <Link to="/signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width:"15%",margin:"0 auto"}}>Sign up for free</Link>    

            </div>

        </div>
    );
}

export default Hero;