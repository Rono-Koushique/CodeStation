import React from "react";
import Navigation from "Components/Navigation/navigation";
import Hero from "./Sections/Hero/hero";
import Services from "./Sections/Services/services";
// import Projects from "./Sections/Projects/projects";
import Reviews from "./Sections/Reviews/reviews";
import Faq from "./Sections/Faq/faq";
import Contact from "./Sections/Contact/contact";
import Footer from "Components/Footer/footer";

export default function homepage() {
    return (
        <div>
            <Navigation />
            <Hero />
            <Services />
            {/* <Projects /> */}
            <Reviews />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
}
