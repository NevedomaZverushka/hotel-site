import React from 'react';
import PropertyPage from './screens/PropertyPage';
import { Footer, Header } from './components';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <PropertyPage />
            <Footer />
        </React.Fragment>
    );
}

export default App;
