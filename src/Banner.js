import React from 'react';
import circle from '../src/images/circle.png';
import banner from '../src/images/bannerimg.png';
import logo from '../src/images/logo.png';
import aayatakar from '../src/images/aayathakar.png';

const Banner = () => {
    return (
        <>
            <section className='banner banner_img'>
              <div className='banner_img_collection'>
              <div className='banner_circle col-md-6'>
                    <img src={circle} alt="circle" className='img-fluid circl' />
                </div>
               
                <div className='banner_men col-md-6'>
                    <img src={banner} alt="banner" className='img-fluid'/>
                </div> 
                </div> 
                <div className='banner_text'>
                    <h1 className='mb-5'> We create <label>unique</label> 
                        beautiful designs
                        for everyone</h1>
                    <a href='#' className='banner_btn btn'>Look More</a>
                </div>             
              
            </section>
            
            <section>
            <div className='collect_banner'>
                    <div className='container'>
                        <div className='row custom_row'>
                            <div className='collection_logo'> <img src={logo} alt="logo" className='img-fluid' /></div>
                            <div className='collection_text'>
                                <h3 className='text-white'>A growing collection of products that demonstrate
                                    the design for wisdom principles.</h3>
                            </div>
                            <div className='collection_circle'>
                                <div className='tree_angle'>
                                    <img src={aayatakar} alt="aayathakar" className='img-fluid'/>
                                    <div className='circle_roll'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner;