import React from "react";
import "./hero.scss";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    let navigate = useNavigate();
    return (
        <section id="hero">
            <div className="container">
                <div className="content">
                    <h1>App & Web development</h1>
                    <p>
                        We assist you in digitalizing and empowering your
                        business, while also achieving your objectives and
                        realizing your vision
                    </p>
                    <button onClick={() => navigate("./contact-us")}>
                        Get Started
                    </button>
                </div>

                <div className="bg">
                    <video autoPlay playsInline muted loop>
                        <source src={require("Assets/Videos/landing.mp4")} />
                    </video>
                    <img
                        src={require("Assets/Images/hero-bg-mask-invert.png")}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
