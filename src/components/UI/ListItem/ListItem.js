import React from 'react';
import classes from './ListItem.module.scss';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const listItem = (props) => {
  let listItemData = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
  if (props) {
    listItemData = props.listItems.map((item) => {
      return (
        <li className={classes.ListItem} key={item.alternate_app_name}>
          <p>Alternative App</p> <span className={classes.Name}>{item.alternate_app_name}</span>
          <span className={classes.Nation}>{item.alternate_app_NATIONALITY}</span>
          <a
            href={`https://play.google.com/store/apps/details?id=${item.alternate_app_package_name}`}
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
