import React from "react";
import brick from '../src//images/brick.png';
import sky from '../src//images/sky.png';
import group from '../src//images/group.png';
const SelectOption = () => {
    return (
        <>
    <section className="efficiency py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="efficiency_text_inner">
                                <h2 className="mb-3">Introducing a design
                                    approach to a relevant
                                    deeply human topic.</h2>
                                <p>When most people hear the word “wisdom” they think of
                                    white-bearded wizards like Harry Potter’
                                    s mentor Dumbledore. Plato, shared this view that wisdom was theoretical and
                                    abstract, and the gift of only a few. Aristotle disagreed.
                                </p>
                                <div className="track_real d-flex align-items-center justify-content-between mb-3 w-75">
                                    <img src={brick}/>
                                    <p className="m-0">Track real life metrics and how they stack up.</p>
                                </div>
                                <div className="track_real d-flex align-items-center justify-content-between mb-1 w-75">
                                <img src={sky}/>
                                    <p className="m-0">Track real life metrics and how they stack up.</p>
                                </div>
                                <button className="banner_btn btn">Create a campaign</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="efficiency_img_inner">
                                <img src={group} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SelectOption;