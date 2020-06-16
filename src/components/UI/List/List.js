import React from 'react';
import classes from './List.module.scss';

import ListItem from '../ListItem/ListItem';

const list = (props) => (
  <div className={classes.List}>
    <div className={classes.ListHeader}>{props.appName}</div>
    <ul className={classes.UnorderedList}>
      <ListItem listItems={props.data} />
    </ul>
  </div>
);

export default list;
