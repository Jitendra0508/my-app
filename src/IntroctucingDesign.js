import React from "react";
import shap from '../src/images/shap.png';
import shap1 from '../src/images/shap1.png';

const design = () => {
    return (
        <>
            <section  className="shap_sec_main py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="design_img position-relative">
                                <img src={shap} alt="shap" className='img-fluid shap' />
                                <img src={shap1} alt="shap1" className='img-fluid shap1 position-absolute' />
                                <div className="shap_text">
                                    <p className="text-white ">“Always pushing to make beautiful digital experiences infused
                                        with emotion and executed with excellence.”</p>
                                    <h4 className="text-white">- Chester Bennington - HBO</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="design_text">
                                <h2 className="mb-3">Introducing a design
                                    approach to a relevant
                                    deeply human topic.</h2>
                                    <a href='#' className='banner_btn btn'>Look More</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default design;