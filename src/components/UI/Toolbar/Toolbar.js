import React, { Component } from 'react';
import classes from './Toolbar.module.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from "react-dom";


class Toolbar extends Component {
  state = {
    input: '',
  };
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
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
        <div className={classes.Title}>App Suggestions  
         </div>
        {/* <div className={classes.about}>About Us</div> */}
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
