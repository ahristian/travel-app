import React from "react"
import {Marker} from "react-mapbox-gl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MapFeature = ({point}) => {
  return (
    <>
      <Marker
        coordinates={point}
        anchor="bottom">
        <FontAwesomeIcon className="map-icon" icon="map-marker-alt" size="lg"/>
      </Marker>
    </>
  )

};