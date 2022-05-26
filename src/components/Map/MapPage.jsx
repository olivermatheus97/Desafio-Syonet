import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import "./Map.css"

//API DO GOOGLE
function MapPage(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCSw0seM_1HJp5FpT2vQtJeOxMUSuxoD2Y"
  })
  //Ponto central caso o usuário não coloquei nem uma latitude ou longitude
  const centerPos = {
    lat: -16.710726,
    lng: -49.226850
  }

  //Os props estão validando se existe objeto informado pelo usuário, caso não iria centralizar na posição fixa a cima
  return (
    <div className="Maps">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: "80%" }}
          center={props.posicaoMarker ? { lat: Number(props.posicaoMarker.latitude), lng: Number(props.posicaoMarker.longitude) } : centerPos}
          zoom={15}
          onChange={''}
        >
          {props.posicaoMarker && (
            // Marcador junto com validador de objeto.
            <Marker
              position={{ lat: Number(props.posicaoMarker.latitude), lng: Number(props.posicaoMarker.longitude) }}
              label={props.posicaoMarker.texto}
            />
          )}
        </GoogleMap>
      ) : <></>}
    </div>)
}

export default MapPage;