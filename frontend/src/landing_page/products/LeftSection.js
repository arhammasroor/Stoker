import React from 'react';

function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore, Try, Learn }) {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-5 p-5'>
                    <img src={imageUrl} />
                </div>
                <div className='col-2'></div>
                <div className='col-5 p-5 mt-5' style={{ lineHeight: "2rem" }}>
                    <h1 className='fs-3'>{productName}</h1>
                    <p className='fs-5 text-muted' style={{ width: "80%" }}>{productDescription}</p>
                    <div>
                        {Try && (
                            <a
                                href={tryDemo}
                                style={{ marginRight: "6rem", textDecoration: "none" }}
                                className="fs-5"
                            >
                                {Try}
                                {Try && <i className="fa fa-long-arrow-right" aria-hidden="true"></i>}
                            </a>
                        )}

                        <a
                            href={learnMore}
                            style={{ textDecoration: "none" }}
                            className="fs-5"
                        >
                            {Learn}
                            {Learn && <i className="fa fa-long-arrow-right" aria-hidden="true"></i>}
                        </a>
                    </div>

                    <div className='mt-4'>
                        <a href={googlePlay} style={{ marginRight: "2rem" }}><img src='media/images/googlePlayBadge.svg' /></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' /></a>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default LeftSection;