import React from 'react';
import './CarInfo.css';
import Section1Accordion from './Section1Accordion/Section1';
import Section3Accordion from './Section3Accordion/Section3';

function CarInfo() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="Section-1">
                    <div className="Section-1-Header">
                        Had an accident or by the roadside?
                    </div>
                    <Section1Accordion/>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="Section-2">
                    <div className="Section-2-Header">
                        How to make a claim
                    </div>
                    <div className="Section-2-Body">
                        <div className="question-1">
                            Is your vehicle insured with Ageas?
                            <div className="ck-button">
                                <label>
                                    <input type="checkbox" value="1"/><span>Yes</span>
                                </label>
                            </div>
                            <div className="ck-button">
                                <label>
                                    <input type="checkbox" value="1"/><span>Yes</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
                <div className="Section-1">
                    <div className="Section-1-Header">
                        FAQ
                    </div>
                    <Section3Accordion/>
                </div>
            </div>
        </div>
    )
}

export default CarInfo
