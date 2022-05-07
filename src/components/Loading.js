import React from 'react';
import '../App.css';
const Loading = (props) => {
  return (
    <div
      className={
        props.size === 'small'
          ? 'half-circle-spinner-small'
          : 'half-circle-spinner'
      }
    >
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>
  );
};
export default Loading;