import React from "react";
import shap from '../src/images/footer.png';
 
const Footer =()=>{
    return(
        <>
        <section className="footer">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                            <div className="frequently_inner">
                                <h2 className="pb-5 text-center">Frequently Asked
                                    Questions</h2>
                                <h6 className="pb-2 pt-5"> How easy is it to import the layout?</h6>
                                <p className="pb-5">We’ve made it ridiculously easy to share your projects and get real-time
                                    feedback on your designs. Clients and colleagues can
                                    comment directly on each screen or drop annotations
                                </p>
                                <h5 className="mb-3"> Why Analog in the project name?</h5>
                                <h5 className="mb-3"> How is this related to wordpress?</h5>
                                <h5 className="border-top pt-3"> Who are you?</h5>
                            </div>
                        </div>
                    <div className="col-lg-12">
                        <div className="footer_inner">
                            <div className="footer_menu">
                                <ul className="d-flex align-items-center text-white">
                                    <li className=" m-1"><a href="#">Privacy & Security</a></li>
                                    <li className=" m-1"><a href="#">Team </a></li>
                                    <li className=" m-1"><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="copy_right">
                                <p className="text-white m-0">© 2019 Themexpert - Made with love for everybody</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer_img">
             <div className="footer_shap">
                    <img src={shap} className="img-fluid" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Footer;