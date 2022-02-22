import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.css";


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// this component display the map and markers for every order
  export default function Map (props) {

    //initializes the map and the container
    let map = useRef(null);
    const mapContainer = useRef(null);

    //defines point of start and end
    const start = props.start; // [latitude, longitude]
    const end = props.end; // [latitude, longitude]

    // fixes a center, located in Hamburg
    const [lng, setLng] = useState(9.9);
    const [lat, setLat] = useState(53.5);
    const [zoom, setZoom] = useState(9.9);


    useEffect(() => {
      // Initialize map when component mounts

      // creates the map, uses the center and zoom defined before
      map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [lng, lat],
        zoom: zoom,
      });

      //add markers
      const markerOrigin = new mapboxgl.Marker()
        .setLngLat([start[1], start[0]])
        .addTo(map);

      const markerDestination = new mapboxgl.Marker()
        .setLngLat([end[1], end[0]])
        .addTo(map);

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      // redefines new lat, long and zoom when the user moves the map
      map.on("move", () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });


      // Clean up on unmount
      return () => map.remove();
    }); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      // renders the map
      <div className="map-display">
        <div className="sidebarStyle">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          <div></div>
        </div>
        <div className="map-container" ref={mapContainer}></div>
      </div>
    );
  };
