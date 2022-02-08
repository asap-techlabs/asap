import React, { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

// This component connects with the API Geoapify in order to get
// real addresses from Hamburg in our form so we can use the in our form
// with autocompletion.

const Address = () => {

  const geoapifyKey = process.env.REACT_APP_GEOAPIFY_KEY

  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggectionChange(value) {
    console.log(value);
    // maybe event.preventDefault()
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
