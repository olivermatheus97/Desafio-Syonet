import React from "react";
import "./Home.css";
import MapPage from "../components/Map/MapPage"

function Home() {
    return (
        <div className="content">
            <div className="cabecalho"></div>
            {/* <a href="index.html"><h1 className="logo">Syonet</h1></a> */}
            <MapPage />
        </div>
    );
}

export default Home