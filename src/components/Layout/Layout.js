import React, {Component, Fragment} from 'react';
import Toolbar from '../UI/Toolbar/Toolbar';
import axios from 'axios';
import List from '../UI/List/List';
import Feed from '../Feed/feed';
import classes from './Layout.module.scss';
class Layout extends Component {
  state = {
    origData: null,
    origKeys: null,
    data: null,
    keys: null
  };

  componentDidMount() {
    axios
      .get('assets/list.json')
      .then((resp) => {
        const tempKeys = resp.data.map((item) => item.app_name);
        this.setState({
          data: resp.data,
          keys: tempKeys,
          origData: resp.data,
          origKeys: tempKeys
        });
      })
      .catch((err) => console.log(err));
  }

  onSearch = (item) => {
    const array = [...this.state.origKeys];
    this.setState({
      keys: this.setKeys(item, array)
    });
  };

  setKeys = (item, arr) => {
    if (item === '') {
      return arr;
    } else {
      return arr.filter((key) => {
        if (key.toLowerCase().search(item.toLowerCase()) >= 0) {
          console.log(key);
          return key;
        }
      });
    }
  };

  render() {
    let listI = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if (this.state.keys) {
      listI = this.state.keys.map((list) => {
        return (
          <List
            appName={list}
            packageName={this.state.data
              .filter((item) => item.app_name === list)
              .map((item) => item.package_name)}
            key={list}
            data={this.state.data
              .filter((item) => item.app_name === list)
              .map((item) => item.alternate)}

          />
        );
      });
    }

    return (
      <Fragment>
        <Toolbar startSearch={this.onSearch}  /> 
          <Feed className={classes.Feed}/> 
          {listI}
      </Fragment>
    );
  }
}
export default Layout;
