import React from 'react';
import classes from './List.module.scss';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ListItem from '../ListItem/ListItem';
import Feed from '../../Feed/feed'

const list = (props) => (
  
  <div className={classes.List}>
    <div className={classes.ListHeader}>

      <span>{props.appName}</span>
      <a
        href={`https://play.google.com/store/apps/details?id=${props.packageName}`}
        className={classes.icon}
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon className={classes.bin} icon={faTrash} />
      </a>
    </div>
    
    <ul className={classes.UnorderedList}>
      <ListItem listItems={props.data} />

    </ul>

  </div>
  
);

export default list;
