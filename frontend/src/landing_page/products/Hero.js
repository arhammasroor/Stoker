import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 fs-5 border-bottom'>
            <div className='row text-center mt-5' >
                <h1 style={{fontSize:"2rem"}}>Stoker Products</h1>
                <p className='text-muted'>Sleek, modern, and intuitive trading platforms</p>
                <p className='text-muted'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>

        </div>
     );
}

export default Hero;