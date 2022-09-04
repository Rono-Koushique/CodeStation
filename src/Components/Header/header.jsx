import React from "react";
import "./header.scss";

const Header = (props) => {
    const location = props.location.split("->");
    const locationElements = location.map(loc => {
        return <li key={loc}>{loc}</li>
    })

    return (
        <section id="header">
            <div className="bg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 300"  preserveAspectRatio="none">
                    <title>codeAsset 1ldpi</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path
                                className="svg-bg"
                                d="M0,0V225s333,75,683,75,683-75,683-75V0Z"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div className="content">
                <h1>{props.title}</h1>
                <ul className="location">
                    { locationElements }
                </ul>
            </div>
        </section>
    );
};

export default Header;
