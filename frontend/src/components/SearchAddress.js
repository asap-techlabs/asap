import Address from './Address'

const SearchAddress = () => {
  return (
    < form className="search-form">
      <div className="form-control">
        <label>From:</label><Address />
        <label>To: </label><Address />
      </div>
      <input type="submit" value="Next" className="btn btn-block" />
    </form>
  )
}

export default SearchAddress
