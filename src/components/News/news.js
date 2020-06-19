import React, { Component } from 'react';
import classes from './news.module.scss';
const news = (props) => (
    <div className={classes.News}>
    <img className={classes.Img} align="left" src="news1.png" />
    <img className={classes.Img2} align="right"  src="news2.png" />

    </div>


);
export default news;
