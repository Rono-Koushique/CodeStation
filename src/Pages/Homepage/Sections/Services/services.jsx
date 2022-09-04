import React from "react";
import "./services.scss";
import Data from "Assets/Data/services";
import SectionHeader from "Components/SectionHeader/SectionHeader";

const Services = () => {
    const dataElements = Data.map((service) => {
        return (
            <div key={service.title} className="card">
                <img
                    src={require(`Assets/Images/services/${service.icon}`)}
                    alt=""
                ></img>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>
        );
    });

    return (
        <section id="services">
            <div className="container">
                <div className="content">
                    <SectionHeader
                        title="Our Web <s>Services<s>"
                        subtitle="In order to assist your company get more customers and 
                    keep them on your website, we provide expert web design services 
                    at affordable prices."
                        position="center"
                    />
                    <div className="cards">{dataElements}</div>
                </div>
            </div>
        </section>
    );
};

export default Services;
