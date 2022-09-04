import SectionHeader from "Components/SectionHeader/SectionHeader";
import React from "react";
import "./reviews.scss";

const Reviews = () => {
    return (
        <section id="reviews">
            <div className="container">
                <div className="content">
                    <SectionHeader
                        title="Our happy <s>Customers<s>"
                        subtitle="We place the greatest emphasis on our clients' 
                        needs. We are always receiving their feedback and using 
                        it to improve ourselves. Here are some of the 
                        greatest reviews."
                    />
                    <div className="reviews">
                        <div className="review">
                            <p>
                                “The team were extremely responsive, with a
                                quick turnaround, excellent client
                                communications and have the flexibility to adapt
                                to new requests."
                            </p>
                            <div className="profile">
                                <img
                                    src={require(`Assets/Images/reviews/rafi-rahman.jpg`)}
                                    alt="rafi"
                                />
                                <div className="info">
                                    <div className="name">Rafi Rahman</div>
                                    <div className="designation">
                                        CSWP, Frontier Semiconductor
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <p>
                                "CodeStation proved to be a professional service
                                provider from the outset. We appreciate their
                                proactive approach and ability to suggest
                                improvements."
                            </p>
                            <div className="profile">
                                <img
                                    src={require(`Assets/Images/reviews/rabi-sany.jpg`)}
                                    alt="sany"
                                />
                                <div className="info">
                                    <div className="name">Rabi Us Sany</div>
                                    <div className="designation">
                                        Instructor, 10 Minuites School
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <p>
                                "We've collaborated on roughly ten mobile app
                                development projects with CodeStation over the
                                last decade. And our connection turned out to 
                                be quite beneficial."
                            </p>
                            <div className="profile">
                                <img
                                    src={require(`Assets/Images/reviews/sweety-nijhum.jpg`)}
                                    alt="sweety"
                                />
                                <div className="info">
                                    <div className="name">Sweety Nijhum</div>
                                    <div className="designation">
                                        Marketing, Al Arafah Bank
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
