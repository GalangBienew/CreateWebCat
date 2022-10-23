import React from "react";
import ImageCat from "../Component/Asset/profilCat.jpg";
import "../Component/CSS/Container.css";

const Containerhed = () => {
  return (
    <div className="Container-start">
      <div className="Container-profile">
        <div className="Container-Image">
          <div className="text-header">
            Welcome to <span>Catters!</span>
          </div>
          <img src={ImageCat} alt="..." />
          <div className="Button">
            <button type="button" className="btn btn-warning center-block">
              Call me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containerhed;
