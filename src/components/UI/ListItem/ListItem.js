import React from 'react';
import classes from './ListItem.module.scss';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const listItem = (props) => {
  let listItemData = (
    <p style={{ textAlign: 'center' }}>Something went wrong!</p>
  );
  if (props) {
    listItemData = props.listItems.map((item) => {
      return (
        <li className={classes.ListItem} key={item.name}>
          <span className={classes.Name}>{item.name}</span>
          <a
            href={item.url}
            className={classes.icon}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        </li>
      );
    });
  }
  return listItemData;
};
export default listItem;
