import React from "react";
import "./navigation.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation(props) {
    let navigate = useNavigate()
    const [ shortNav, setShortNav ] = React.useState(false)
    const [ openHam, setOpenHam ] = React.useState(false)
    
    React.useEffect(() => {
        const changeNav = () => {
            if (window.scrollY >= 50) {
                setShortNav(true)
            } else {
                setShortNav(false)
            }
        }
        window.addEventListener("scroll", changeNav, { passive: true });
        return () => window.removeEventListener("scroll", changeNav)
    }, [shortNav])

    const navLinks = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Projects", link: "/projects" },
        { name: "About", link: "/about" },
        { name: "Contact Us", link: "/contact-us" }
    ];

    const linkElements = navLinks.map((link) => {
        return <Link className="link" key={link.name} to={link.link}>{link.name}</Link>
    });

    return (
        <nav className={shortNav ? "shortNav" : ""}>
            <div className="container">
                <div className="brand-logo" onClick={() => navigate("/")}>
                    <img
                        src={require(`Assets/Images/brand-logo-sm.png`)}
                        alt="brand-logo"
                    ></img>
                    <div className="text">CodeStation</div>
                </div>
                <ul>{linkElements}</ul>
                <div id="hamburger" className={openHam ? "open" : ""} onClick={() => setOpenHam(prevState => !prevState)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>
        </nav>
    );
}
