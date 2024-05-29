import React from "react";
import myImage from "../../assets/Header Lady 1.png";
import googleSVG from "../../assets/Vector.svg";
import fbSVG from "../../assets/Vector2.svg";
import IgSVG from "../../assets/Vector3.svg";
import twitterSVG from "../../assets/Vector4.svg";

export const Main = () => {
  return (
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <h2 className="display-3">Buscando adornos para casa?</h2>
          <h3 className="display-5">
            No lo busques más que en SMTM lo tenemos todo para ti!
          </h3>
          <div className="d-flex gap-3">
            <img src={googleSVG} alt="Google Icon" />
            <img src={fbSVG} alt="Facebook Icon" />
            <img src={IgSVG} alt="Instagram Icon" />
            <img src={twitterSVG} alt="Twitter Icon" />
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <img src={myImage} class="img-fluid" alt="Descripción de la imagen" />
        </div>
      </div>
    </div>
  );
};
