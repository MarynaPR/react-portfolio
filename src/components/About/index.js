import React from 'react';
import coverImg from '../../assets/images/self.jpg';


function About(props) {
    return (

        <div className="row g-0">
            <div className="col-md-4">
                <img src={coverImg} alt="self"></img>{props.children}
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p>hi, welcome to my portfolio! </p>

                    <p> I am an entry level web developer from Madison WI. Currently attending

                            <span> UW coding bootcamp </span> and building awesome things.</p>
                    <br></br>

                </div>
            </div>
        </div>
    )
}
export default About;
