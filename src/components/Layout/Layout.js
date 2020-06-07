import React, { Component, Fragment } from 'react';
import Toolbar from '../UI/Toolbar/Toolbar';
import axios from 'axios';
import List from '../UI/List/List';
class Layout extends Component {
  state = {
    origData: null,
    origKeys: null,
    data: null,
    keys: null,
  };

  componentDidMount() {
    axios
      .get('assets/list.json')
      .then((resp) => {
        this.setState({ data: resp.data });
        this.setState({ keys: Object.keys(resp.data) });
        this.setState({
          origData: this.state.data,
          origKeys: this.state.keys
        });
      })
      .catch((err) => console.log(err));
  }

  onSearch = (item) => {
    const array = [...this.state.origKeys]
    this.setState({
      keys: this.setKeys(item, array),
    });
  };
  setKeys = (item, arr) => {
    // console.log('Item', item);
    if(item === '') {
      // console.log('Returnning', arr);
      return arr;
    } else {
      return arr.filter((key) => {
        if (key.search(item) >= 0) {
          // console.log('[Item]', item);
          return key;
        }
      });
    }
  };

  render() {
    let listI = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (this.state.keys) {
      listI = this.state.keys.map((list) => {
        return <List appName={list} key={list} data={this.state.data[list]} />;
      });
    }

    return (
      <Fragment>
        <Toolbar startSearch={this.onSearch} />
        {listI}
      </Fragment>
    );
  }
}

export default Layout;
