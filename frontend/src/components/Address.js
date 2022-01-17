import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

const Address = () => {

  const geoapifyKey = process.env.REACT_APP_GEOAPIFY_KEY

  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggectionChange(value) {
    console.log(value);
  }

    function preprocessHook(value) {
    return `${value}, Hamburg, Germany`
  }

  return <GeoapifyContext apiKey={geoapifyKey}>

        <GeoapifyGeocoderAutocomplete placeholder="Enter address of destination here"
        preprocessHook={preprocessHook}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        />
    </GeoapifyContext>
}

export default Address
