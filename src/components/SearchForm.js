import React, { useState, useEffect, useRef } from 'react';

function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);


  const onChageHandler = (e) => {
    setSearchTerm(e.target.value);
    // props.setSearch(searchValue.current.value); using useRef()
    props.setSearch(searchTerm);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className="section">
      {/* <h2 className="section-title">Search Cocktail</h2> */}
      <form className="search-form" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label>Search your favourite cocktail.</label>
          <input type="text" id="name" onChange={onChageHandler} value={searchTerm} ref={searchValue} />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
