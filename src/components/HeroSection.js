import React from "react";
import CustomImage from "./CustomImage";

const HeroSection = () => {

    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg",
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                {
                    images.map(
                        (image,index) => (
                            <CustomImage key={index} imageSrc={image} pt={"90%"} />
                            
                        )
                    )
                }
                
                
            </div>

      
        </div>
        
    )
   
};

export default HeroSection;
