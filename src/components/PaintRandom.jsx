import React, { useEffect, useState } from "react";
import axios from "axios";

const PaintRandom = () => {
  const [paintData, setPaintData] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const index = Math.floor(Math.random() * 99);
  /* const randomIndex = paintData[index] */
  console.log(paintData);
  //-Nouvelle API Chicago museum plus simple je pense à tester
  const API = "https://api.artic.edu/api/v1/artworks?limit=100";

  //-Ici on a l'API qui explique la peinture via son id : https://api.artic.edu/api/v1/artworks/{id}/manifest.json

  //-Nouvelle variable API pour travailler sur la barre de recherche mais il faut afficher le résultat dans une page où l'on montre qu'une peinture
  //!En utilisant le .id on à la possibilité de récuperer les informations propre à la peinture du peintre tapé et donc image_id.
  const apiSearch =
    "https://api.artic.edu/api/v1/artworks/search?q=" + searchBar;
  /* console.log(apiSearch); */

  //-UseEffect utilisé lorsque axios à besoin de faire jouer sa recherche
  useEffect(() => {
    axios.get(API).then((res) => setPaintData(res.data.data[index]));
  }, []);

  return (
    <div className="paints">
      <h1>{paintData.title}</h1>
    </div>
  );
};

export default PaintRandom;

//!Il faut que je récupère l'id grâce à la premiere API, pour pouvoir utiliser le lien d'API de description pour afficher la description de la peinture avec : .value
//!Ensuite créer un nouveau const [valueId, setValueId] = useState("") pour afficher la description de la peinture avec la nouvelle API


