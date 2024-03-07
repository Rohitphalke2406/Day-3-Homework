import React from "react";
import './bodySection.css';

function BodySection(){
    return(
        <section>
           <div className="image-section">
                <img src="https://img.freepik.com/premium-photo/two-girls-sitting-bench-looking-lake-one-them-is-boat_874813-2877.jpg" alt="" />
           </div>
           <div className="contact-info">
                <h1>Think Health. Think Massage.</h1>
                <p>We are open 9am to 5pm, Monday to Saturday. <br />If you would like to schedule appointment with us plz call us at 9008007001!</p>
                <div className="button-container">
                    <button>Learn More About us</button>
                    <button>Contact us today</button>
                </div>
                
           </div>
           <div className="address-info">
            <p className="diffrent-color">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates delectus soluta cum, totam eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta sequi nobis ratione velit neque et expedita quibusdam autem earum!</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam officia, nihil ratione ad optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, aliquid.</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellat a quas recusandae necessitatibus, incidunt corporis officiis accusantium Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, eligendi.</p>
            <hr />
            <h2>Family Wellness Massage Therapy</h2>
            <br />
            <p className="address-para">9876 Main Street, Suite 123, Mainland <br /> Phone no: 9002004001</p>
           </div>
        </section>
    );
}

export default BodySection;