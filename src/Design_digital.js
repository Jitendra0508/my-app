import React from "react";
import box1 from '../src/images/box1.png';
import box2 from '../src/images/box2.png';
import box3 from '../src/images/box3.png';

const DesignDigital = () => {
    return (
        <>
            <section className="desg_digital p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  text-center py-4 m-auto">
                            <h2 className="mb-4">Design feedback in one
                                place next to the work</h2>
                                <p>When most people hear the word “wisdom” they think of white-bearded 
                                    wizards like Harry Potter’s mentor Dumbledore. Plato, shared this view that
                                     wisdom was theoretical 
                                    and abstract, and the gift of only a few. Aristotle disagreed.
                                    </p>
                        </div>                      
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="box_inner p-3">
                                <div className="box_img mb-2">
                                    <img src={box1} className="img-fluid" />
                                </div>
                                <div className="box_text">
                                    <h4 className="mb-2">Collaboration</h4>
                                    <p>Clients and colleagues can leave comments annotations directly 
                                    on your designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="box_inner p-3 border-start">
                                <div className="box_img mb-2">
                                    <img src={box2} className="img-fluid" />
                                </div>
                                <div className="box_text">
                                    <h4 className="mb-2">Collaboration</h4>
                                    <p>Clients and colleagues can leave comments annotations directly 
                                    on your designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="box_inner p-3 border-start">
                                <div className="box_img mb-2">
                                    <img src={box3} className="img-fluid" />
                                </div>
                                <div className="box_text">
                                    <h4 className="mb-2">Collaboration</h4>
                                    <p>Clients and colleagues can leave comments annotations directly 
                                    on your designs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DesignDigital;