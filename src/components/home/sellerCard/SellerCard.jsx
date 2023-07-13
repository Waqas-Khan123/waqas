import React from 'react';
import './sellerCard.css';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function SellerCard() {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        // dots: true,
        infinite: true,
        buttons: true,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
        <div style={{ margin: "auto" }}>
            <div className="profileHead mb-5">
                <h2 className="what-we-serve">
                    Our Top <span className="active">Seller</span>
                </h2>
                <p className="subhead">
                High-performing experts leading the business-to-business.{" "}
                </p>
            </div>
            <Container>
                <Slider {...settings}>
                    <div>
                        <div className='seller-card-main-container'>

                            <div className='card-container border'>
                                <div className='inner-card-container'>
                                    <div className='inner-card-content1 '>
                                        <div className='iner-c1-left'>

                                            <div className='inner-left-img-box'>
                                                <img src='/asserts/images/seller-card/331401462_901871491052076_4140015511851026313_n.jpg' alt='#' /></div>
                                            <div className='title-box'>
                                                <p>UI/UX Designer </p>
                                            </div>
                                            <p className='payment-box-p-hr'>$24/hr</p>


                                        </div>
                                        <div className='iner-c1-right'>

                                            <div className='card-seller-name'><h5>Adam Jon, 24 yrs.</h5></div>
                                            <div className='cntry-cntnt'>Sweden, Australia</div>
                                            <div className='seller-content-level'>Level 2 Seller</div>
                                            <div className='card-yellow-stars'>
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star3.png' alt='#' />

                                            </div>

                                        </div>


                                    </div>
                                    <div className='inner-card-content2 '>
                                        <div className='hash-tags'>Hash Tags</div>
                                        <div className='skills'>
                                            <span className='all-skill'>Designer</span>
                                            <span className='all-skill'>Developer</span>
                                            <span className='all-skill'>App designer</span>

                                        </div>
                                        <div className='about-cntnt-seller'>
                                            <div className='about-top-hdr'>About me</div>
                                            <div className='about-m-cntnt'>Morbi et placerat lorem. In nec dui mattis, iaculis nulla et, scelerisque metus. Donec id euismod erat..</div>




                                        </div>


                                    </div>

                                    <div className='inner-card-content3'>

                                        <span className='book-now-svd-job'>Book Now</span>
                                        <span className='book-now-svd-job'>Save Job</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='seller-card-main-container'>

                            <div className='card-container border'>
                                <div className='inner-card-container'>
                                    <div className='inner-card-content1 '>
                                        <div className='iner-c1-left'>

                                            <div className='inner-left-img-box'>
                                                <img src='/asserts/images/seller-card/331401462_901871491052076_4140015511851026313_n.jpg' alt='#' /></div>
                                            <div className='title-box'>
                                                <p>UI/UX Designer </p>
                                            </div>
                                            <p className='payment-box-p-hr'>$24/hr</p>


                                        </div>
                                        <div className='iner-c1-right'>

                                            <div className='card-seller-name'><h5>Adam Jon, 24 yrs.</h5></div>
                                            <div className='cntry-cntnt'>Sweden, Australia</div>
                                            <div className='seller-content-level'>Level 2 Seller</div>
                                            <div className='card-yellow-stars'>
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star3.png' alt='#' />

                                            </div>

                                        </div>


                                    </div>
                                    <div className='inner-card-content2 '>
                                        <div className='hash-tags'>Hash Tags</div>
                                        <div className='skills'>
                                            <span className='all-skill'>Designer</span>
                                            <span className='all-skill'>Developer</span>
                                            <span className='all-skill'>App designer</span>

                                        </div>
                                        <div className='about-cntnt-seller'>
                                            <div className='about-top-hdr'>About me</div>
                                            <div className='about-m-cntnt'>Morbi et placerat lorem. In nec dui mattis, iaculis nulla et, scelerisque metus. Donec id euismod erat..</div>




                                        </div>


                                    </div>

                                    <div className='inner-card-content3'>

                                        <span className='book-now-svd-job'>Book Now</span>
                                        <span className='book-now-svd-job'>Save Job</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='seller-card-main-container'>

                            <div className='card-container border'>
                                <div className='inner-card-container'>
                                    <div className='inner-card-content1 '>
                                        <div className='iner-c1-left'>

                                            <div className='inner-left-img-box'>
                                                <img src='/asserts/images/seller-card/331401462_901871491052076_4140015511851026313_n.jpg' alt='#' /></div>
                                            <div className='title-box'>
                                                <p>UI/UX Designer </p>
                                            </div>
                                            <p className='payment-box-p-hr'>$24/hr</p>


                                        </div>
                                        <div className='iner-c1-right'>

                                            <div className='card-seller-name'><h5>Adam Jon, 24 yrs.</h5></div>
                                            <div className='cntry-cntnt'>Sweden, Australia</div>
                                            <div className='seller-content-level'>Level 2 Seller</div>
                                            <div className='card-yellow-stars'>
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star3.png' alt='#' />

                                            </div>

                                        </div>


                                    </div>
                                    <div className='inner-card-content2 '>
                                        <div className='hash-tags'>Hash Tags</div>
                                        <div className='skills'>
                                            <span className='all-skill'>Designer</span>
                                            <span className='all-skill'>Developer</span>
                                            <span className='all-skill'>App designer</span>

                                        </div>
                                        <div className='about-cntnt-seller'>
                                            <div className='about-top-hdr'>About me</div>
                                            <div className='about-m-cntnt'>Morbi et placerat lorem. In nec dui mattis, iaculis nulla et, scelerisque metus. Donec id euismod erat..</div>




                                        </div>


                                    </div>

                                    <div className='inner-card-content3'>

                                        <span className='book-now-svd-job'>Book Now</span>
                                        <span className='book-now-svd-job'>Save Job</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='seller-card-main-container'>

                            <div className='card-container border'>
                                <div className='inner-card-container'>
                                    <div className='inner-card-content1 '>
                                        <div className='iner-c1-left'>

                                            <div className='inner-left-img-box'>
                                                <img src='/asserts/images/seller-card/331401462_901871491052076_4140015511851026313_n.jpg' alt='#' /></div>
                                            <div className='title-box'>
                                                <p>UI/UX Designer </p>
                                            </div>
                                            <p className='payment-box-p-hr'>$24/hr</p>


                                        </div>
                                        <div className='iner-c1-right'>

                                            <div className='card-seller-name'><h5>Adam Jon, 24 yrs.</h5></div>
                                            <div className='cntry-cntnt'>Sweden, Australia</div>
                                            <div className='seller-content-level'>Level 2 Seller</div>
                                            <div className='card-yellow-stars'>
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star3.png' alt='#' />

                                            </div>

                                        </div>


                                    </div>
                                    <div className='inner-card-content2 '>
                                        <div className='hash-tags'>Hash Tags</div>
                                        <div className='skills'>
                                            <span className='all-skill'>Designer</span>
                                            <span className='all-skill'>Developer</span>
                                            <span className='all-skill'>App designer</span>

                                        </div>
                                        <div className='about-cntnt-seller'>
                                            <div className='about-top-hdr'>About me</div>
                                            <div className='about-m-cntnt'>Morbi et placerat lorem. In nec dui mattis, iaculis nulla et, scelerisque metus. Donec id euismod erat..</div>




                                        </div>


                                    </div>

                                    <div className='inner-card-content3'>

                                        <span className='book-now-svd-job'>Book Now</span>
                                        <span className='book-now-svd-job'>Save Job</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='seller-card-main-container'>

                            <div className='card-container border'>
                                <div className='inner-card-container'>
                                    <div className='inner-card-content1 '>
                                        <div className='iner-c1-left'>

                                            <div className='inner-left-img-box'>
                                                <img src='/asserts/images/seller-card/331401462_901871491052076_4140015511851026313_n.jpg' alt='#' /></div>
                                            <div className='title-box'>
                                                <p>UI/UX Designer </p>
                                            </div>
                                            <p className='payment-box-p-hr'>$24/hr</p>


                                        </div>
                                        <div className='iner-c1-right'>

                                            <div className='card-seller-name'><h5>Adam Jon, 24 yrs.</h5></div>
                                            <div className='cntry-cntnt'>Sweden, Australia</div>
                                            <div className='seller-content-level'>Level 2 Seller</div>
                                            <div className='card-yellow-stars'>
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star.png' alt='#' />
                                                <img src='/asserts/images/seller-card/Star3.png' alt='#' />

                                            </div>

                                        </div>


                                    </div>
                                    <div className='inner-card-content2 '>
                                        <div className='hash-tags'>Hash Tags</div>
                                        <div className='skills'>
                                            <span className='all-skill'>Designer</span>
                                            <span className='all-skill'>Developer</span>
                                            <span className='all-skill'>App designer</span>

                                        </div>
                                        <div className='about-cntnt-seller'>
                                            <div className='about-top-hdr'>About me</div>
                                            <div className='about-m-cntnt'>Morbi et placerat lorem. In nec dui mattis, iaculis nulla et, scelerisque metus. Donec id euismod erat..</div>




                                        </div>


                                    </div>

                                    <div className='inner-card-content3'>

                                        <span className='book-now-svd-job'>Book Now</span>
                                        <span className='book-now-svd-job'>Save Job</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </Slider>
                <br />
                <br />
                <br />

            </Container>
        </div>
    )
}

export default SellerCard