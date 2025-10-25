import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5 mt-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-3 '>Open a Stoker account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.

                    Sign up for free</p>
                <Link to="/signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width:"15%",margin:"0 auto"}}>Sign up for free</Link>    

            </div>

        </div>
     );
}

export default OpenAccount;