import React, { useState } from 'react';
import './style.css';
import  cityData from './data/locations.json';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
  GoogleMap,
  useLoadScript,
  Marker
} from '@react-google-maps/api';
import HomePage from './components/HomePage';
import UPLOAD_STATE_PAGE from './components/UPLOAD_STATE_PAGE';
import REGISTER_PAGE from './components/REGISTER_PAGE';
import SIGN_IN_PAGE from './components/SIGN_IN_PAGE';





const libraries = ["places"];
const roads =[];
const pavement =[];
const potHoles = [];
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
  const [markers, setMarkers] = React.useState([]); 
  const [visableMarker, setVisabilty] = React.useState(true);
  const [markerCat, setMarkerCat] = React.useState({
    category: cityData.category,
    visable: true
  })
  
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

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
  const getUnique = (arr, comp)=>{
    const unique =arr
    .map(e => e[comp])
    .map((e, i, final) =>final.indexOf(e) === i && i)
    .filter(e =>arr[e])
    .map(e => arr[e]);
    return unique;
    
  }
 const setRoadsArray =() =>{
  
   
   for (let index = 0; index < cityData.length; index++) {
     const element = cityData[index];
     if(element.category==="Roads/highways"){
        if (!roads.includes(element)) {
          roads.push(element);
        }
       
     }
     
   }
   
  
 }
 const setPavementsArray =() =>{
  
   
  for (let index = 0; index < cityData.length; index++) {
    const element = cityData[index];
    if(element.category==="Pavements/footpaths"){
      if (!pavement.includes(element)) {
        pavement.push(element);   
      }
     
    }
    
  }
}
const setPotHolesArray = () =>{
  for (let index = 0; index < cityData.length; index++) {
    const element = cityData[index];
    if(element.category==="Potholes"){
      if (!potHoles.includes(element)) {
        potHoles.push(element);
      }
      
    }
    
  }
}
   
   
  const RoadVisable =()=>{
    var fisable =true;
    for (let index = 0; index < cityData.length; index++) {
      const element = cityData[index];
      if (markerCat.category === "Roads/highways" || markerCat.category===undefined|| markerCat.category==="Choose a category") {
        
        return fisable;
  
      }
      else{
        return fisable=false;
      }
    }
  }
  const PavVisable =()=>{
    var fisable =true;
    for (let index = 0; index < cityData.length; index++) {
      const element = cityData[index];
      if (markerCat.category === "Pavements/footpaths"|| markerCat.category===undefined|| markerCat.category==="Choose a category") {
        
        return fisable;
  
      }
      else{
        return fisable=false;
      }
    }
  }
  const PotVisable =()=>{
    var fisable =true;
    for (let index = 0; index < cityData.length; index++) {
      const element = cityData[index];
      if (markerCat.category === "Potholes"|| markerCat.category===undefined|| markerCat.category==="Choose a category") {
        
        return fisable;
  
      }
      else{
        return fisable=false;
      }
    }
  }
 
  const unique = getUnique(cityData, "category");
  
   
  return (
  <Router>
  <HomePage/>
  <div className = "Blow">
  <Switch>
    <Route  path="/" exact component={GoogleMap}>
    <div className="MapDiv">
    {setRoadsArray()}
    {setPavementsArray()}
    {setPotHolesArray()}
   
    <form value= "null" onChange = {e => setMarkerCat({category: e.target.value})}>
     
                    <select> 
                        
                        {unique.map( items => (
                          <option 
                            key = {items.key}
                            value= {items.category}>
                            {items.category}
                          </option>
                        ))} 
                    </select>
                          
                    </form>
    
    <GoogleMap mapContainerStyle={mapContainerStyle}
              zoom={13}
              center={center}
              options={options}
              onLoad={onMapLoad}
              onClick= {onMapClick}>
                {markers.map(marker=>(
                  <Marker
                    key={marker.time.toISOString()}
                    position = {{
                      lat: marker.lat,
                      lng: marker.lng
                    }}
                    
                  />
                ))};
                 {roads.map(road =>(
                   <Marker
                   visible= {RoadVisable()}
                   key = {road.key}
                   position= {{
                    lat:road.latitude, 
                    lng:road.longitude 
                  }}
                  icon= {{
                    url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png",
                    scaledSize: new window.google.maps.Size(45, 45),
                  }}
                   />    
                ))};
                {pavement.map(pavement =>(
                   <Marker
                   visible= {PavVisable()}
                   key = {pavement.key}
                   position= {{
                    lat:pavement.latitude, 
                    lng:pavement.longitude 
                  }}
                  icon= {{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                    scaledSize: new window.google.maps.Size(45, 45),
                  }}
                   />     
                ))};
                {potHoles.map(potHoles =>(
                   <Marker
                   visible= {PotVisable()}
                   key = {potHoles.key}
                   position= {{
                    lat:potHoles.latitude, 
                    lng:potHoles.longitude 
                  }}
                  icon= {{
                    url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                    scaledSize: new window.google.maps.Size(45, 45),
                  }}
                   />     
                ))};
                 
              </GoogleMap>
    
    
  </div>

    </Route>
    <Route path= "/register_page" component= {REGISTER_PAGE}/>
    <Route path= "/sign-in" component= {SIGN_IN_PAGE}/>
    <Route path= "/upload" component= {UPLOAD_STATE_PAGE}/>
  </Switch>
  
  </div>
  </Router>
  );
  
}