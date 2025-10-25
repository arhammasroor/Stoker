import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='' style={{ color: "white" }}>Track Tickets</a>
            </div>
            <div className=' row p-5' style={{ marginLeft: "6rem" ,marginTop:"-3rem"}} >
                <div className='col-6 p-5' style={{ width: "50%" }}>
                    <h1 className="fs-4 mb-4"> Search for an answer or browse help topics to create a ticket</h1>
                    <input className='mb-3' style={{ width: "90%", height: "50px", borderRadius: "10px", border: "1px solid white",paddingLeft:"2rem"}} placeholder="Eg. how do I activate F&O" />
                    <br />
                    <a href="" style={{ color: "white", marginRight: "1rem" }}>Track account opening</a>
                    <a href="" style={{ color: "white", marginRight: "1rem" }}>Track segment activation</a>
                    <a href="" style={{ color: "white", marginRight: "1rem" }}>Intraday margins</a>
                    <a href="" style={{ color: "white" }}>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className="fs-4" style={{ marginLeft: "5rem" }}>Features</h1>
                    <ol style={{ marginLeft: "4rem" }}>
                        <li className='mb-2'>
                            <a href="" style={{color:"white"}}>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="" style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>

    );
}

export default Hero;