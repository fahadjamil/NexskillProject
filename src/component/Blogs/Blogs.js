import React,{useEffect} from "react";
import './Blogs.css';
import Footer from "../Footer";
import CopyRight from "../CopyRight";
import Header from "../Header";
import BlogSection from "./BlogSection";

const Blogs=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="main">
        <Header/>
        <BlogSection/>
        <Footer/>
        <CopyRight/>
    </div>
    );
};
export default Blogs;