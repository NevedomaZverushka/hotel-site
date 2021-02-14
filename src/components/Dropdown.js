import React from 'react';
import Select from 'react-select';

export default function Dropdown(props) {
    const { placeholder, items, item, setItem, darkmode = true, containerStyle } = props;
    const [styles, setStyles] = React.useState({});

    React.useEffect(() => {
        setStyles({
            container: styles => ({
                ...styles,
                ...containerStyle
            }),
            control: styles => ({
                ...styles,
                backgroundColor: darkmode ? '#25333c' : '#fff',
                borderRadius: 0,
                height: '2.5rem',
            }),
            menu: styles => ({
                ...styles,
                backgroundColor: darkmode ? '#25333c' : '#fff',
                borderRadius: 0,
            }),
            valueContainer: styles => ({
                ...styles,
                height: '100%'
            }),
            option: (styles, { isSelected }) => {
                return {
                    ...styles,
                    backgroundColor: isSelected ? '#1e4f60' : '',
                    '& h3': {
                        color: !darkmode ? (isSelected ? "#efefef" : "#555") : "",
                    },
                    height: '3rem',
                };
            },
            dropdownIndicator: (provided) => ({
                ...provided,
                height: "3.5rem",
            })
        });
    }, [darkmode]);

    return(
        <Select
            styles={styles}
            components={{
                IndicatorSeparator: () => null,
                Placeholder: () => (
                    <h3 style={{ fontSize: "1.125rem", color: !darkmode ? "#555 !important" : "" }}>{placeholder}</h3>
                )
            }}
            formatOptionLabel={
                ({ label }) => (<h3 style={{ fontSize: "1.125rem", height: "2.7rem", color: !darkmode ? "#555 !important" : "" }}>{label}</h3>)
            }
            options={items}
            defaultValue={items[0]}
            onChange={({ value }) => setItem(value)}
            isSearchable={false}
        />
    );
}
