import React from "react";
import "./contact.scss";
import Data from "Assets/Data/contact";
import SectionHeader from "Components/SectionHeader/SectionHeader";

function Contact() {
    const contactElements = Data.types.map((type) => {
        return (
            <div className="tile">
                <img
                    src={require(`Assets/Images/contact/${type.icon}`)}
                    alt={type.name}
                />
                <div className="name">{type.name}</div>
                <div className="text">
                    {type.text.split("\n").map((str) => (
                        <p>{str}</p>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <section id="contact">
            <div className="container">
                <div className="content">
                    <SectionHeader 
                        title="Get In <s>Touch<s>"
                        subtitle="Trying to contact us? You can do so by 
                            email or text message. You may also contact 
                            us in person with any questions or concerns 
                            about your order."
                        position="center"
                    />
                    {/* <div className="all-contacts">
                        <div className="map">
                            <img 
                                className="location"
                                src={require("Assets/Images/contact/map-location.png")} 
                            />
                        </div>
                        <div className="mobile">
                            Mobile
                        </div>
                        <div className="mail">
                            mail
                        </div>
                    </div> */}
                    <div className="types">{contactElements}</div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
