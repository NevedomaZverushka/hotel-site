import React from 'react';
import { Input } from "./index";

export default function MoreInformationForm() {
    const [value, setValue] = React.useState("");

    return(
        <div className="information_block">
            <h2>Get information about all destination</h2>
            <div className="row" style={{ gap: '2rem', width: '100%' }}>
                <Input containerStyle={{ flex: 2, border: "1px #555 solid" }} value={value} setValue={setValue} />
                <button>Subscribe</button>
            </div>
        </div>
    );
}
