import React from 'react';
import style from '../styles/title.css';

const Title = props => {
  return (
    <div className={style.title}>
      <h2>kodilla</h2>
      <span>kodilla2: {props.data.length} zadanie16.5</span>
    </div>
  );
};

export default Title;
