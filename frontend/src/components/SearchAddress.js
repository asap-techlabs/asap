import Address from './Address'

const SearchAddress = () => {
  return (
  <div className="container-md" style={{marginTop: "30px"}}>
    <h2 className="title-search-form">Where?</h2>
    <form className="search-form" style={{marginTop: "30px"}}>
      <div className="row mb-3">
        <label htmlFor="From:" className="col-sm-2 col-form-label">From:</label>
        <div className="col-sm-10">
          <Address/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="To:" className="col-sm-2 col-form-label">To:</label>
        <div className="col-sm-10">
          <Address/>
        </div>
      </div>
      <button type="submit" className="btn btn-success">Next</button>
    </form>
  </div>
  )
}

export default SearchAddress
