import React, { Component } from 'react';
import classes from './Toolbar.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Toolbar extends Component {
  state = {
    input: '',
  };

  updateInputValueHandler = (event) => {
    const value = event.target.value;
    this.setState((state, props) => {
        if(state.input !== value) {
            return {input: value};
        }
    }, () => {
        this.startSearch();
    });
  };

  startSearch = () => {
    this.props.startSearch(this.state.input.toLowerCase());
  };
  render() {
    return (
      <header>
        <div className={classes.Title}>App Suggestions</div>
        <div className={classes.SearchBox}>
          <label htmlFor='search' className={classes.Label}>
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            type='text'
            id='search'
            value={this.state.input}
            onChange={this.updateInputValueHandler}
            className={classes.Search}
            placeholder='Search for an alternative...'
          />
        </div>
      </header>
    );
  }
}

export default Toolbar;
