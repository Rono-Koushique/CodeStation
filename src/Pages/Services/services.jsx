import React from "react";
import "./services.scss";
import Data from "Assets/Data/services-page";

import Navigation from "Components/Navigation/navigation";
import Header from "Components/Header/header";
import Footer from "Components/Footer/footer";

const Services = () => {
    const services = Data.services
    const serviceElements = services.map(service => {
        return <div className="card" key={service.title}>
            <img src={require(`Assets/Images/services-page/${service.img}`)} alt={service.title}/>
            <div className="content">
                <h1>{service.title}</h1>
                <p>{service.desc}</p>
                <h2>Read More</h2>
            </div>
        </div>
    })

    return (
        <div>
            <Navigation bg={true} />
            <Header title="Services" location="Home->Services" />

            <section id="services-page">
                <div className="content">
                    { serviceElements }
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
