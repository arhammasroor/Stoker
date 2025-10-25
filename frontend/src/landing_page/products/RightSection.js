import React from 'react';

function RightSection({ imageUrl, productName, productDescription, tryDemo,Try }) {
    return (
        <div className='container mt-5'>
            <div className='row mx-5'>
                <div className='col-5 p-5' style={{ lineHeight: "2rem",marginTop:"7rem"}}>
                    <h1 className='fs-3'>{productName}</h1>
                    <p className='fs-5 text-muted' style={{ width: "70%" }}>{productDescription}</p>

                    <a href={tryDemo} style={{textDecoration: "none" }} className='fs-5'>{Try}{Try &&<i class="fa fa-long-arrow-right" aria-hidden="true"></i>}</a>

                </div>
                <div className='col-5 p-5'>
                    <img src={imageUrl} />
                </div>
            </div>
        </div>
        
    );
}

export default RightSection;