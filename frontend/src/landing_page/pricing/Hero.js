import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className='row text-center border-bottom p-5 mt-5'>
                <h1 className='fs-2'>Charges</h1>
                <p className='text-muted fs-4'>List of Charges And Taxes</p>
            </div>
            <div className='row' style={{marginLeft:"3rem",marginTop:"5rem"}}>
                <div className='col-4 p-3 text-muted'>
                    <img src='media/images/pricing0.svg' style={{width:"80%"}} />
                    <h1 className='fs-3 mb-3'>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3 text-muted'>
                    <img src='media/images/intradayTrades.svg' style={{width:"80%"}}/>
                    <h1 className='fs-3 mb-3'>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3 text-muted'>
                    <img src='media/images/pricingMF.svg' style={{width:"80%"}}/>
                    <h1 className='fs-3 mb-3'>
                        Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;