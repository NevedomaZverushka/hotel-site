import React from 'react';
import Select from 'react-select';

export default function Dropdown(props) {
    const { placeholder, items, item, setItem, darkmode = true } = props;

    const styles = React.useMemo(() => {
        return(
            {
                container: styles => ({
                    ...styles,
                    marginBottom: "1rem",
                }),
                control: styles => ({
                    ...styles,
                    backgroundColor: '#25333c',
                    borderRadius: 0,
                    height: '2.5rem',
                }),
                menu: styles => ({
                    ...styles,
                    backgroundColor: '#25333c',
                    borderRadius: 0,
                }),
                option: (styles, { isSelected }) => {
                    return {
                        ...styles,
                        backgroundColor: isSelected ? '#1e4f60' : '',
                        height: '3rem',
                    };
                },
                dropdownIndicator: (provided) => ({
                    ...provided,
                    height: "3.5rem",
                })
            }
        )
    }, [darkmode]);

    return(
        <Select
            styles={styles}
            components={{
                IndicatorSeparator: () => null,
                Placeholder: () => <h3 style={{ fontSize: "1.125rem" }}>{placeholder}</h3>
            }}
            formatOptionLabel={({ label }) => (<h3 style={{ fontSize: "1.125rem", height: "2.7rem" }}>{label}</h3>)}
            options={items}
            defaultValue={items[0]}
            onChange={({ value }) => setItem(value)}
        />
    );
}
