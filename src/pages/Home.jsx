import React, { useState } from "react";
import "./Home.css";
import MapPage from "../components/Map/MapPage"



function Home() {

    const [texto, setTexto] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [posicao, setPosicao] = useState(null)
    //foi acrescentado uma função onclick, para quando o usuário der as informações gerar um objeto.
    function onClickButton() {
        setPosicao({
            latitude,
            longitude,
            texto
        })
    }
    //criação de 3 input para o usuário digitar as informações, cada uma ligada a uma const "quando quiser pegar um valor chama pelo nome "texto" 
    // e quando quiser dar um novo valor você chama "setTexto"" .
    return (
        <div className="content">
            <div className="cabecalho">
                <a href="index.html"><h1 className="logo">Syonet</h1></a>
            </div>
            <div className="Tmapa">
                <div className="inputs">
                    Latitude: <input lat="latitude type=text" value={latitude} onChange={event => setLatitude(event.target.value)}></input>
                    Longitude: <input lng="longitude type=text" value={longitude} onChange={event => setLongitude(event.target.value)}></input>
                    Texto: <input txt="txt type=text" value={texto} onChange={event => setTexto(event.target.value)}></input>
                    <button type="button" onClick={onClickButton}>Buscar</button>
                </div>
                <MapPage posicaoMarker={posicao} />
            </div>
        </div>
    );
}

export default Home