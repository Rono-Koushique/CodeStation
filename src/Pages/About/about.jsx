import React from "react";
import "./about.scss";
import Data from "Assets/Data/about";
import Navigation from "Components/Navigation/navigation";
import Header from "Components/Header/header";
import Footer from "Components/Footer/footer";
import SectionHeader from "Components/SectionHeader/SectionHeader";

const About = () => {
    const learn = Data.learn;
    const learnElements = learn.map((topic) => {
        return (
            <div className="card" key={topic.ask}>
                <img
                    src={require(`Assets/Images/about/${topic.icon}`)}
                    alt=""
                />
                <h1>{topic.ask}</h1>
                <p>{topic.ans}</p>
            </div>
        );
    });

    const crew = Data.crew;
    const crewElements = crew.map((person) => {
        return (
            <div className="card" key={person.name}>
                <img
                    src={require(`Assets/Images/about/${person.img}`)}
                    alt={person.name}
                />
                <div className="info">
                    <h1>{person.name}</h1>
                    <h2>{person.post}</h2>
                    <p>{person.desc}</p>
                    <div className="social">
                        <img
                            src={require("Assets/Images/about/facebook.png")}
                            alt=""
                        ></img>
                        <img
                            src={require("Assets/Images/about/instagram.png")}
                            alt=""
                        ></img>
                        <img
                            src={require("Assets/Images/about/linkedin.png")}
                            alt=""
                        ></img>
                        <img
                            src={require("Assets/Images/about/twitter.png")}
                            alt=""
                        ></img>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="page-master">
            <Navigation />
            <Header title="About" location="Home->About" />

            <section id="agenda">
                <div className="content">
                    <SectionHeader
                        title="Our <s>Agenda<s>"
                        subtitle="CodeStation is a Web Development firm. We create 
                        websites, mobile apps, desktop software,etc..."
                        position="center"
                    />
                    <div className="learn">{learnElements}</div>
                </div>
            </section>

            <section id="crew">
                <div className="bg">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                </div>
                <div className="container">
                    <div className="content">
                        <SectionHeader 
                            title="Our <s>Designers and Engineers<s>"
                            subtitle="We sincerely believe that design has near limitless
                            potential to change our world for the better, and
                            this common belief has drawn together our creative,
                            curious and eccentric group of designers,
                            researchers and engineers. Come meet the team."
                            position="center"
                        />
                        <div className="members">{crewElements}</div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
