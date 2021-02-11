import React from 'react';

export default function Card(props) {
    const { title, children, style } = props;
    return(
      <div className="card" style={style}>
          {(title) && <h2>{title}</h2>}
          {children}
      </div>
    );
}
