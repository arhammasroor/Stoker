import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(248,248,248)" }} className='border-top'>
            <div className='container fixed'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='media/images/newlogo.png' style={{ width: "60%" }} className='mb-3' />
                        <p>© 2010 - 2025, Stoker Broking Ltd.

                            All rights reserved.</p>
                        <i class="fa fa-facebook-official fs-3 mx-2" aria-hidden="true"></i>
                        <i class="fa fa-linkedin-square fs-3 mx-2" aria-hidden="true"></i>
                        <i class="fa fa-instagram fs-3 mx-2" aria-hidden="true"></i>
                        <i class="fa fa-telegram fs-3 mx-2" aria-hidden="true"></i>
                        <hr></hr>
                        <i class="fa fa-whatsapp fs-3 mx-2" aria-hidden="true"></i>
                        <i class="fa fa-youtube-play fs-3 mx-2" aria-hidden="true"></i>
    
                    </div>
                    <div className='col'>
                        <p>Company</p>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Open demat account</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Minor demat account</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>NRI demat account</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Commodity</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Dematerialisation</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Fund transfer</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>MTF</a>
                        <a href='' className='text-muted text-decoration-none d-block mb-2'>Referral program</a>
                    </div>

                    <div className="col">
                        <p>Support</p>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Contact us</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Support portal</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">How to file a complaint?</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Status of your complaints</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Bulletin</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Circular</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Z-Connect blog</a>
                        <a href="" className="text-muted text-decoration-none d-block">Downloads</a>
                    </div>

                    <div className="col">
                        <p>Account</p>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">About</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Philosophy</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Press & media</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Careers</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Stoker Cares (CSR)</a>
                        <a href="" className="text-muted text-decoration-none d-block mb-2">Stoker.tech</a>
                        <a href="" className="text-muted text-decoration-none d-block">Open source</a>
                    </div>


                </div>
                <div className='mt-5 text-small text-muted' style={{ fontSize: ".8rem" }}>
                    <p>Stoker Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Stoker Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Stoker Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Stoker Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@stoker.com, for DP related to dp@stoker.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Stoker and offering such services, please create a ticket here.</p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;