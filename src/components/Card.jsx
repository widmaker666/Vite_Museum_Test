import React from "react";

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