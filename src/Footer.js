import React from "react";
import shap from '../src/images/rightAngle.png';
 
const Footer =()=>{
    return(
        <>
        <section className="footer">
            <div className="container">
                <div className="row">
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
             <div className="container-fluid">
             <div className="footer_shap">
                    <img src={shap} className="img-fluid" />
                </div>
             </div>

            </div>
        </section>
        </>
    )
}
export default Footer;