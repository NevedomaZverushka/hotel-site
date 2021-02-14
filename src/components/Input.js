import React from 'react';

export default function Input(props) {
    const { value, setValue = () => {}, containerStyle, rightIcon = "" } = props;
    return(
        <input
            className="input"
            style={{
                ...containerStyle,
                background: rightIcon ? `url(${rightIcon}) no-repeat scroll right 50% #fff` : "",
                backgroundSize: rightIcon ? `1.5rem` : ""
            }}
            onChange={setValue} value={value}
        />
    );
}
