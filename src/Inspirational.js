import React from "react";
import profile from '../src/images/profile.png';
// import icon from '../src/images/icon.png';

const inspirational = () => {
    return (
        <>
            <section className="inspirational p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 pb-5">
                            <h2 className="text-center">Inspirational Quotes </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="insp_box_inner text-center border p-2 ">
                                <div className="insp_text pt-5">
                                    <p>“Always pushing to make beautiful digital
                                        experiences infused with emotion and executed
                                        with excellence.”</p>
                                </div>
                                <div className="ins_profile mt-5 border-top">
                                    <img src={profile} className="pro_img mb-3 mt-3" />
                                    <h3 className="mb-2">Chester Bennington</h3>
                                    <p className="m-0">Linkin Park</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="insp_box_inner text-center border p-2 ">
                                <div className="insp_text pt-5">
                                    <p>“Always pushing to make beautiful digital
                                        experiences infused with emotion and executed
                                        with excellence.”</p>
                                </div>
                                <div className="ins_profile mt-5 border-top">
                                    <img src={profile} className="pro_img mb-3 mt-3" />
                                    <h3 className="mb-2">Chester Bennington</h3>
                                    <p className="m-0">Linkin Park</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="insp_box_inner text-center border p-2 ">
                                <div className="insp_text pt-5">
                                    <p>“Always pushing to make beautiful digital
                                        experiences infused with emotion and executed
                                        with excellence.”</p>
                                </div>
                                <div className="ins_profile mt-5 border-top">
                                    <img src={profile} className="pro_img mb-3 mt-3" />
                                    <h3 className="mb-2">Chester Bennington</h3>
                                    <p className="m-0">Linkin Park</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="insp_box_inner text-center border p-2 ">
                                <div className="insp_text pt-5">
                                    <p>“Always pushing to make beautiful digital
                                        experiences infused with emotion and executed
                                        with excellence.”</p>
                                </div>
                                <div className="ins_profile mt-5 border-top">
                                    <img src={profile} className="pro_img mb-3 mt-3" />
                                    <h3 className="mb-2">Chester Bennington</h3>
                                    <p className="m-0">Linkin Park</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default inspirational;