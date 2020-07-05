import React from 'react';
import './App.css';
import  cityData from './data/csvjson.json';
import * as parkData from './data/skateboard-parks.json'
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
 
} from '@react-google-maps/api'
import { formatRelative } from "date-fns";


const libraries = ["places"];

const mapContainerStyle = {
  width: '30vw',
  height: '50vh',

};
const center = {
  lat: 51.42459058,
  lng: -2.400383547,

};
const options = {
disableDefaultUI: true,
zoomControl: true,

};
export default function App() {
  const [markers, setMarkers]= React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  
  const {isLoaded,loadError} =  useLoadScript({
    googleMapsApiKey: "AIzaSyAqy7psyJ2_XiXtHPqwrdKcwynMCuQeKgs",
    libraries,
    
  });
  if(loadError){
    return "Load map failiure";
  } 
  if (!isLoaded) {
    return "Loading maps";
  }
  return <div className="MapDiv">

    <GoogleMap mapContainerStyle={mapContainerStyle}
              zoom={13}
              center={center}
              options={options}
              onLoad={onMapLoad}>
                {cityData.map(data =>(
                   <Marker
                   key = {data.created}
                   position= {{
                    lat:data.latitude, 
                    lng:data.longitude 
                  }} 
                   />

                    
                ))};
                
              </GoogleMap>
    
    
  </div>
}
