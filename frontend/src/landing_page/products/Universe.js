import React from 'react';
import {Link} from 'react-router-dom';

function Universe() {
    return (
        <div className='container'>
            <div className='row text-center mt-5 text-muted p-5'>
                <h1 className='fs-4 mb-4'>The Stoker Universe</h1>
                <p style={{ fontSize: "1.1rem" }}>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row p-5' style={{marginLeft:"5rem"}}>
                <div className='col-4' style={{paddingRight:"5rem"}}>
                    <img src='media/images/zerodhaFundhouse.png' style={{ width: "50%" }} />
                    <p className='mb-5'>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                    <img src='media/images/streakLogo.png' style={{ width: "50%" }} />
                    <p>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4'style={{paddingRight:"5rem"}}>
                    <img src='media/images/sensibullLogo.svg' style={{ width: "60%" }} />
                    <p className='mb-5'>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                    <img src='media/images/smallcaseLogo.png' style={{ width: "50%" }} />
                    <p>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4'style={{paddingRight:"5rem"}}>
                    <img src='media/images/goldenpiLogo.png' style={{ width: "50%" }} />
                    <p className='mb-5'>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.
                    </p>
                    <img src='media/images/dittoLogo.png' style={{ width: "50%" }} />
                    <p>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling</p>
                </div>

            </div>
            <div className='row' style={{marginBottom:"6rem"}}>
                <Link to={"/signup"} type="button" class="btn btn-primary" style={{width:"15%",margin:"0 auto"}}>Sign up for free</Link>
            </div>
        </div>
    );
}

export default Universe;