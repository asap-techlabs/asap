import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/round-borders.css'
import SearchAddress from './SearchAddress'
// This component connects with the API Geoapify in order to get
// real addresses from Hamburg in our form so we can use the in our form
// with autocompletion.

export default function Address (props) {

  // Key to use the API
  const geoapifyKey = process.env.REACT_APP_GEOAPIFY_KEY

  // this function filters the results to be just inside of Hamburg
  function preprocessHook(value) {
    return `${value}, Hamburg, Germany`
  }
  // this returns the results of the API call and pass them to the data
  return <GeoapifyContext apiKey={geoapifyKey}>
          <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
          preprocessHook={preprocessHook}
          placeSelect={props.onPlaceSelect}
          data={ props.isOrigin? [props.searchAddress.originAddress, props.searchAddress.lat, props.searchAddress.lon] : [props.searchAddress.destinationAddress, props.searchAddress.lat, props.searchAddress.lon] }
          />
      </GeoapifyContext>

  };
