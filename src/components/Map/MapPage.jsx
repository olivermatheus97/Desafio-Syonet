import React from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import "./Map.css"
import Home from "../../pages/Home";


function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCSw0seM_1HJp5FpT2vQtJeOxMUSuxoD2Y"
  })

  const centerPos = {
    lat: -16.710726,
    lng: -49.226850
  }
  const [marker, setMarker] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const onMapClick = React.useCallback((e) => {
    setMarker(
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
  }, []);

  return (
    <div className="Maps">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: "80%" }}
          center={centerPos}
          zoom={15}
          onChange={''}
          onClick={onMapClick}>
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
          {
            selected ? (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
              >
                <div>
                  <h3>Loc: </h3>
                  <p>{`Lat:${marker.lat}`}</p>
                  <p>{`Lng:${marker.lng}`}</p>
                </div>
              </InfoWindow>
            ) : null}
        </GoogleMap>
      ) : <></>}
    </div>)
}

export default MapPage;