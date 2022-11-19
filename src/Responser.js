import React from "react";
import responser from '../src/images/responser.png';
const Responser = () => {
    return (
        <>
            <section className="responser">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="resp_img">
                            <img src={responser} alt="banner" className='img-fluid'/>
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
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Responser;