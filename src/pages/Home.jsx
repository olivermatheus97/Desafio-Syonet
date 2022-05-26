import React from "react";
import "./Home.css";
import MapPage from "../components/Map/MapPage"

function Home() {
    return (
        <div className="content">
            <div className="cabecalho">
                <a href="index.html"><h1 className="logo">Syonet</h1></a>
            </div>
            <div className="Tmapa">
                <div className="inputs">
                    Latitude: <input lat="latitude type=text"></input>
                    Longitude: <input lng="longitude type=text"></input>
                </div>
                <MapPage />
            </div>
        </div>
    );
}

export default Home