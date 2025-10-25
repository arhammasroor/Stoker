import React from 'react';

function Team() {
    return ( 
        <div className='container' style={{marginTop:"-3rem"}}>
            <div className='row border-top'>
                <h1 className='text-center mt-5 text-muted'>People</h1>
            </div>
            <div className='row p-5' style={{lineHeight:"2rem",fontSize:"1.2rem"}}>
                <div className='col p-5 text-center' >
                    <img src='media/images/owner.jpg' style={{borderRadius:"100%",width:"60%"}}/>
                    <p className='mt-3 text-active'>Arham Masroor</p>
                    <p style={{fontSize:"1rem"}} className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col p-5 text-muted'>
                    <p>Arham bootstrapped and founded Stoker in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='' style={{textDecoration:"none"}}>HomePge</a>/ <a href='' style={{textDecoration:"none"}}>TrendingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;