import React from "react";
import "./contact.scss";

import Navigation from "Components/Navigation/navigation";
import Header from "Components/Header/header";
import Footer from "Components/Footer/footer";

const Contact = () => {
    return (
        <div>
            <Navigation bg={true} />
            <Header title="Contact Us" location="Home->Contact Us" />

            <section id="write-us">
                <div className="content">
                    <div className="left">
                        <div>
                            <h1>01</h1>
                            <p>Contact us to schedule a free consultation.</p>
                        </div>
                        <div>
                            <h1>02</h1>
                            <p>
                                A qualified engineer will answer all your
                                questions and your personal manager will outline
                                our next steps.
                            </p>
                        </div>
                        <div>
                            <h1>03</h1>
                            <p>
                                We will prepare a project estimate and a
                                preliminary development and testing plan for
                                your project.
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        <h1>Ready to start</h1>
                        <div className="header-divider"></div>
                        <p>
                            Tell us about your project and let’s get to work.
                            Please fill up the form below and submit. We'll get
                            back to you as soon as possible.
                        </p>
                        <div id="textboxs">
                            <div className="input-group">
                                <input id="fullname" name="fullname" required placeholder=" "></input>
                                <label for="fullname">Full Name</label>
                            </div>

                            <div className="input-group">
                                <input id="email" name="email" required placeholder=" "></input>
                                <label for="email">Email</label>
                            </div>

                            <div className="input-group">
                                <textarea id="description" name="description" required placeholder=" "></textarea>
                                <label for="description">Description</label>
                            </div>
                        </div>
                        <div className="agree">
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                            <p>I agree to the Code Station <u>Cookie Policy</u> and <u>Privacy Policy</u> *</p>
                        </div>
                        <button>Submit</button>
                    </div>
                </div>
            </section>

            <section id="call-us">
                <div className="content">
                    <div className="links">
                        <h1>Address</h1>
                        { "Sector-6, Uttara, Dhaka-1230, \nBangladesh".split("\n").map(line => {
                            return <p>{line}</p>
                        }) }
                    </div>
                    <div className="links">
                        <h1>Phone</h1>
                        { "New Accounts: +880 176-342-7561\nSupport: +880 168-979-8659".split("\n").map(line => {
                            return <p>{line}</p>
                        }) }
                    </div>
                    <div className="links">
                        <h1>Email</h1>
                        { "codestation.bd@gmail.com\ncodestation@gmail.com".split("\n").map(line => {
                            return <p>{line}</p>
                        }) }
                    </div>
                </div>
            </section>

            <section id="visit-us">
                <div className="content">
                    <h1>Come Visit Us</h1>
                    <img src={require("Assets/Images/contact/map.png")} alt="map" />
                </div>
            </section>

            <Footer bg="#FFFFFF"/>
        </div>
    );
};

export default Contact;
