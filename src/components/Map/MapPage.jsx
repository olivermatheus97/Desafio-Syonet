import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import "./Map.css"

function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCSw0seM_1HJp5FpT2vQtJeOxMUSuxoD2Y"
  })

  return (
    <div className="Maps">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: "100%" }}
          center={{
            lat: -16.710726,
            lng: -49.226850
          }}
          zoom={15}
        ></GoogleMap>
      ) : <></>}
    </div>)
}

export default MapPage;