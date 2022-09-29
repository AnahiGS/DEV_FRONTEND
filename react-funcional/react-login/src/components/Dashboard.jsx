import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const BASE_URL = "https://swapi.dev/api/";

  const [planetArray, setPlanetArray] = useState([]);
  const [planetInfo, setPlanetInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}planets`)
      .then(({ data }) => setPlanetArray(data.results))
      .catch((error) => console.log("error calling SWAPI"));
  }, []);

  return (
    <>
      {planetArray.length === 0 ? (
        <h3>Cargando información... ⭕️</h3>
      ) : (
        planetArray.map((planet, index) => (
          <div key={index} style={{ border: "2px solid white" }}>
            <p>Name: {planet.name}</p>
            <p>Climate: {planet.climate}</p>
            <div>Lista de peliculas: 
                <p>
                    {planet.films.map((planet,i) =>(
                        <span>URL: {planet}</span>
                    ))}
                </p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default Dashboard;