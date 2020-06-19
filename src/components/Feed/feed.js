import React, { Component } from 'react';
import classes from './feed.module.scss';
const feed = (props) => (
    <div className={classes.Feed}>
<ul> <span className={classes.para}>Recent Posts </span>
<li className={classes.link}><a href="https://yourstory.com/2020/06/tiktok-wechat-india-intel-agencies-chinese-apps-scanner?fbclid=IwAR0XqX9fExW8xDr_0ggfhSuOE-5HfjZuc6vRTmtpa6A_Sg9Yh5LbIY4SMAA" target="_blank">Ban 50+ Chinese App</a></li>
<li className={classes.link}><a href="https://www.hindustantimes.com/india-news/intel-agencies-red-flag-use-of-52-mobile-apps-with-links-to-china-complete-list/story-B50Slf39aSnVOrCcS92l1N.html" target="_blank">Red Flag Apps</a></li>
<li className={classes.link}><a href="http://en.wikipedia.org/wiki/https://m.republicworld.com/technology-news/apps/indian-apps-to-replace-chinese-apps.html" target="_blank">Chinese App Alternatives</a></li>

</ul>
            </div>

);
export default feed;
