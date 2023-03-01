import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const PaintCard = () => {
  const [paintData, setPaintData] = useState([]);
  const [rangeValue, setRangeValue] = useState(24);
  const [searchBar, setSearchBar] = useState("");
  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";

  //-Nouvelle variable API pour travailler sur la barre de recherche mais il faut afficher le résultat dans une page où l'on montre qu'une peinture
  //!En utilisant le .id on à la possibilité de récuperer les informations propre à la peinture du peintre tapé et donc image_id.
  const apiSearch =
    "https://api.artic.edu/api/v1/artworks/search?q=" + searchBar;
    /* console.log(apiSearch); */

  //-UseEffect utilisé lorsque axios à besoin de faire jouer sa recherche
  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data));
  }, []);

  return (
    <div className="paints">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="100"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recherche"
          onChange={(e) => setSearchBar(e.target.value)}
        />
      </ul>
      <ul>
        {paintData.slice(0, rangeValue).map((paint, index) => (
          <Card key={index} paint={paint} />
        ))}
      </ul>
    </div>
  );
};

export default PaintCard;