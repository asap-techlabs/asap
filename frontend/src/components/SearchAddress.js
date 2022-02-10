import Address from './Address'

// this components incorporates the search of addresses on the form.

export default function SearchAddress() {

  const [state, setState] = useState({

      originAddress: '',
      destinationAddress: '',
      distance: 0,
      date: new Date(),
      price: 0

      });

    function onChangeOriginAddress(address) {
      // console.log('origin address changed to: ', address.properties.formatted )
      setState({
        originAddress: address.properties.formatted
      });
    };

    function onChangeDestinationAddress(address) {
      // console.log('destination address changed', address.properties.formatted )
    setState({
      destinationAddress: address.properties.formatted
    });
    }

    function onSubmit(event) {
      event.preventDefault();
      console.log(state);
      const order = {
        originAddress: state.originAddress,
        destinationAddress: state.destinationAddress,
        distance: 0,
        date: new Date(),
        price: 0
      }
      console.log(order);
}
  return (
  <div className="container-md" style={{marginTop: "30px"}}>
    <h2 className="title-search-form">Where?</h2>
    <form className="searchForm" style={{marginTop: "30px"}}>
      <div className="row mb-3">
        <label htmlFor="from" className="col-sm-2 col-form-label">From:</label>
        <div className="col-sm-10">
          <Address type='text' isOrigin={true} onPlaceSelect={onChangeOriginAddress} searchAddress={state} setOriginAdress={setState}/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="to" className="col-sm-2 col-form-label">To:</label>
        <div className="col-sm-10">
          <Address type='text' isOrigin={false} onPlaceSelect={onChangeDestinationAddress} searchAddress={state} setDestinationAdress={setState}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-success">Next</button>
    </form>
  </div>
  )
}
