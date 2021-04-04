import React from 'react';
import coverImg from '../../assets/images/self.jpg';


function About(props) {
    return (

        <div className="row g-2">
            <div className="col-md-5" style={{ margin: "30px", padding: "10px 10px", border: ""}}>
                <img src={coverImg} alt="self"></img>{props.children}
            </div>
            <div className="col-md-6">
                <div>
                    <p>hi, welcome to my portfolio! </p>
                    <p>I am a full stack web developer leveraging entrepreneurial background to build more intuitive user experience on the web.
                    My  background in customer service is a definite asset when it comes to user research and my drive to problem-solve is an asset in writing code.
                    Known as an innovative critical thinker, I am passionate about sustainability in all aspects of life, with a focus on meeting the current needs of a user without compromising the ability of those needs to be met in the future.
                    Eager to deliver value and result working on creating solutions with a focus of keeping the content clear and actionable using
                    <span> JavaScript, CSS, MongoDB, React and responsive web design</span>. I look forward to collaborating and working with others to develop meaningful applications that deliver diversity and user friendly experience. </p>
                    <br></br>

                </div>
            </div>
        </div>
    )
}
export default About;
