import React from 'react';
import styles from "./Searchbar.module.css"
import PropTypes from 'prop-types';
import { getPictures } from '../../helpers/helpers';


const Searchbar = ({ updateCards, search, setSearch }) => {

  const onSubmit = (e) => {
    e.preventDefault()
    getPictures(search)
      .then(data => {
        const result = data.hits
        updateCards(result)
      })
  }

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_buttonLabel}>Search</span>
        </button>

        <input
          onChange={setSearch}
          name="search"
          value={search}
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter search"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  updateCards: PropTypes.func
};

export default Searchbar;
