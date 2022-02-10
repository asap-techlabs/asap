import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/round-borders.css'
import SearchAddress from './SearchAddress'
// This component connects with the API Geoapify in order to get
// real addresses from Hamburg in our form so we can use the in our form
// with autocompletion.

export default function Address (props) {
  // this initializes the component with a state and the empty data object to be filled.

  // console.log(props, 'originAddress: ', props.searchAddress.originAddress)
  //  console.log("props",props)
  //   const [state, setState] = useState({
  //         data: ''
  //     });


  // Key to use with the API
  const geoapifyKey = process.env.REACT_APP_GEOAPIFY_KEY
  // After the selection of an address from the dropdown we get the address in the state data object.

  // const onPlaceSelect = function (value){
  //   console.log('original state: ', props.searchAdress)
  //   const tmpState = props.searchAdress
  //   console.log('copied state: ', tmpState)
  //   tmpState.data = value.properties.formatted
  //   console.log('modified state: ', tmpState)
  //   // props.setOriginState({value.properties.formatted})
  //     // setState({
  //     //   data: value.properties.formatted
  //     // });
  // };


  // function onPlaceSelect(value) {
  //   console.log(value);
  // }

  // function onSuggestionChange(value) {
  //   console.log(value);
  //   // maybe event.preventDefault()
  // }

  function preprocessHook(value) {
    return `${value}, Hamburg, Germany`
  }

  return <GeoapifyContext apiKey={geoapifyKey}>
          <GeoapifyGeocoderAutocomplete placeholder="Enter address here"
          preprocessHook={preprocessHook}
          placeSelect={props.onPlaceSelect}
          data={ props.isOrigin? props.searchAddress.originAddress : props.searchAddress.destinationAddress }
          />
      </GeoapifyContext>

  };
