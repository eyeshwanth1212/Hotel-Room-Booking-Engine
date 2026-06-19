function SearchBar() {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Location"
      />

      <input type="date" />

      <input type="date" />

      <select>
        <option>1 Guest</option>
        <option>2 Guests</option>
        <option>3 Guests</option>
        <option>4 Guests</option>
      </select>

      <button>Search</button>
    </div>
  );
}

export default SearchBar;