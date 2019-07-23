import React from 'react';
import classes from './ProgressBar.css';
const progressBar = (props)=>{
  return(
    <div className={classes.Background}>
      <p>Processing…</p>
      <div className={classes.Box}>
        <div className={classes.Line}></div>
      </div>
    </div>
  );
};

export default progressBar;