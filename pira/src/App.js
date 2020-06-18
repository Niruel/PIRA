import React from 'react';
import './App.css';
import {
GoogleMap,
useLoadScript,
} from '@react-google-maps/api'


const libraries = ["places"];
const mapContainerStyle = {
  width: '30vw',
  height: '50vh',

};
const center = {
  lat: 35.012856,
  lng: 135.958981,

};
export default function App() {
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

    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={center}></GoogleMap>
  </div>
}