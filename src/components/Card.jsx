import React from "react";

//! Besoin de l'id de la peinture grâce a un onClick (e) => setValue(e.target.value) ou quelque chose comme ça pour récuperer l'id et ensuite le mettre à l'intérieur de l'adresse d'api
const Card = ({ paint }) => {
  return (
    <li className="card">
      <img
        src={`https://www.artic.edu/iiif/2/${paint.image_id}/full/843,/0/default.jpg`}
        alt={paint.title}
      />

      <div className="infos">
        <h2>{paint.title}</h2>
        <h4>{paint.artist_title}</h4>
        <p>{paint.place_of_origin}</p>
      </div>
    </li>
  );
};

export default Card;