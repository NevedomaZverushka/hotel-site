import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function Dropdown(props) {
    const { placeholder, items, item, setItem, darkmode = true } = props;
    return(
        <div>
            <Select
                styles={{ option: (provided, state) => ({
                    ...provided,
                    borderBottom: '1px dotted pink',
                    padding: 20,
                }), }}
                components={{
                    IndicatorSeparator: () => null,
                    Placeholder: () => <h3>FUCK</h3>
                }}
                IndicatorSeparator={null}
                options={options}
            />
        </div>
    );
}
