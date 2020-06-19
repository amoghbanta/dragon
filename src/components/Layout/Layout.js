import React, {Component, Fragment} from 'react';
import Toolbar from '../UI/Toolbar/Toolbar';
import axios from 'axios';
import List from '../UI/List/List';
import Feed from '../Feed/feed';
import classes from './Layout.module.scss';
import News from '../News/news';
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
        // console.log('Response', resp.data);
        const tempKeys = resp.data.map((item) => {
          return item.app_name;
        });
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
              .map((item) => {
                return {
                  alternate_app_name: item.alternate_app_name,
                  alternate_app_package_name: item.alternate_app_package_name,
                  alternate_app_NATIONALITY: item.alternate_app_NATIONALITY
                };
              })}
          />
        );
      });
    }

    return (
      <Fragment>
        <Toolbar startSearch={this.onSearch} />
        {/* <Feed className={classes.Feed} /> */}
        <News />
        {listI}
      </Fragment>
    );
  }
}
export default Layout;
