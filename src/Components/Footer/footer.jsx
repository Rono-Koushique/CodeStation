import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <section id="footer">
            <div className="bg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1366 320"
                    preserveAspectRatio="none"
                >
                    <title>codeAsset 1ldpi</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path
                                // style={{ fill: "#1a2029" }}
                                className="cls-1"
                                d="M0,0V320H1366V0S1033,75,683,75,0,0,0,0Z"
                            />
                        </g>
                    </g>
                </svg>
                <img src={require("Assets/Images/logo-footer.png")} alt="" />
            </div>

            <div className="container">
                <div className="content">
                    <h1>CodeStation</h1>
                    <div className="links">
                        <div>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div>© 2022 Code Station. All Rights Reserved</div>
                    <div>Terms of use | Privacy | Cookies</div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
