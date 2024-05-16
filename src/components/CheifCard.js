import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const CheifCard = ({ cheif }) => {
  return (
    <div className="cheif-card">
      <img src={cheif.img} alt={cheif.name} />
      <div className="cheif-card-info">
        <h3 className="cheif-card-name">{cheif.name}</h3>
        <p className="cheif-recipe-count">
          Recipe:<b>{cheif.reciepesCount}</b>
        </p>
        <p className="cheif-cuisine">
          Cuisine:<b>{cheif.cuisine}</b>
        </p>
        <p className="cheif-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};

export default CheifCard;
