import React,{useEffect} from "react";
import './Events.css';
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import Header from "../Header";
import EventSection from "./EventSection";


const Events=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <>
           <div className="main">
            <Header/>
            <EventSection/>
            <Footer/>
            <CopyRight/>
        </div>
        
        </>
    )
};
export default Events;