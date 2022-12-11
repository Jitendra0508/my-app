import React from "react";
import responser from '../src/images/responser.png';
import reslogo1 from '../src/images/reslogo1.png';
import reslogo2 from '../src/images/reslogo2.png';
import reslogo3 from '../src/images/reslogo3.png';
import reslogo4 from '../src/images/reslogo4.png';
import reslogo5 from '../src/images/reslogo5.png';
const Responser = () => {
    return (
        <>
            <section className="responser">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="resp_img">
                                <img src={responser} alt="banner" className='img-fluid' />
                                <div className="responser_inner">
                                    <h2 className="mb-3">Going from something
                                        abstract and fluffy to
                                        concrete design
                                        principles.</h2>
                                    <p className="mb-4">We’ve made it ridiculously easy to share your projects and get
                                        real-time feedback on your designs. Clients and colleagues can comment directly on each screen
                                        or drop annotations</p>
                                    <div className="parcent">
                                        <strong>52%</strong>
                                        <span>Productivity Increase</span>
                                    </div>
                                </div>
                            </div>
                            <div className="resp_logo">
                                <div className="resp_loh_img">
                                    <img src={reslogo1} alt=""/>
                                </div>
                                <div className="resp_loh_img">
                                    <img src={reslogo2} alt=""/>
                                </div>
                                <div className="resp_loh_img">
                                    <img src={reslogo3} alt=""/>
                                </div>
                                <div className="resp_loh_img">
                                    <img src={reslogo4} alt=""/>
                                </div>
                                <div className="resp_loh_img">
                                    <img src={reslogo5} alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Responser;