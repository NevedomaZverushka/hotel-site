import React from 'react';

export default function Input(props) {
    const { value, setValue, containerStyle } = props;
    return(
        <input className="input" style={containerStyle} onChange={setValue} value={value} />
    );
}
