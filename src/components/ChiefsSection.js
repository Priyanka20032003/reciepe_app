import React from "react";
import CheifCard from "./CheifCard";

const ChiefsSection = () => {
  const cheifs = [
    {
      img: "/img/top-cheifs/img_1.jpg",
      name: "Juan Carlos",

      reciepesCount: "10",
      cuisine: "Mexican",
    },
    {
      img: "/img/top-cheifs/img_2.jpg",
      name: "Juan Doe",

      reciepesCount: "05",
      cuisine: "Japanese",
    },
    {
        img: "/img/top-cheifs/img_3.jpg",
        name: "Enrich Maria",
  
        reciepesCount: "13",
        cuisine: "Italian",
      },
      {
        img: "/img/top-cheifs/img_4.jpg",
        name: "Chris Brown",
  
        reciepesCount: "08",
        cuisine: "American",
      },
      {
        img: "/img/top-cheifs/img_5.jpg",
        name: "Blake Lively",
        reciepesCount: "09",
        cuisine: "French",
      },
      {
        img: "/img/top-cheifs/img_6.jpg",
        name: "Ben Affleck",
  
        reciepesCount: "04",
        cuisine: "Indian",
      },

  ];
  return (
    <div className="section cheifs">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-cheifs-container">
        {cheifs.map((cheif)=>
        <CheifCard key={cheif.name} cheif={cheif}/>

        )}
        
        
      </div>
    </div>
  );
};

export default ChiefsSection;
