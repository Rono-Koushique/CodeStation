import React from "react";
import "./SectionHeader.scss";

export default function SectionHeader({ title, subtitle, position }) {
    const heading = title.split("<s>")

    function getAlign() {
        switch (position) {
            case "right":
                return { alignItems: "flex-end" };
            case "center":
                return { alignItems: "center" };
            case "left":
                return { alignItems: "flex-start" };
            default:
                return { alignItems: "flex-start" };
        }
    }

    return (
        <div style={ getAlign() } className="section-header">
            <h1 style={{ textAlign: `${position}` }}>
                {heading[0]}<span>{heading[1]}</span>{heading[2]}
            </h1>
            {/* <div className="header-divider"></div> */}
            {subtitle &&  <h2 style={{ textAlign: `${position}` }}>
                {subtitle}
            </h2>}
        </div>
    );
}
