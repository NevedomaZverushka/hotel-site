import React from 'react';

export default function Switch() {
    const [btns, setBtns] = React.useState([
        { id: 1, label: "Map", selected: false },
        { id: 2, label: "List", selected: false },
        { id: 3, label: "Grid", selected: true },
    ]);

    const onSelect = React.useCallback((id) => {
        let temp = [...btns];
        temp.forEach((btn) => { btn.selected = btn.id === id });
        setBtns(temp);
    }, [btns]);

    return(
        <div className="switch">
            {btns?.map(({ id, label, selected }) => {
                return(
                    <button onClick={() => onSelect(id)} className={`${selected ? "selected" : ""}`} key={id}>
                        {label}
                    </button>
                )
            })}
        </div>
    );
}
