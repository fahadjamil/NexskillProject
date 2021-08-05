import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import AboutUsSection from "./AboutUsSection";
import './AboutUs.css';

const AboutUS=()=>{
    return(
        <>
        <div className="main">
            <Header/>
            <AboutUsSection/>
            <Footer/>
        </div>
        </>
    )
};
export default AboutUS;