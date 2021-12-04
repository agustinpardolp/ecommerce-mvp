import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from '../screens/Main';

function App(props) {
    return (
        <Router>
            <Main props={props} />
        </Router>
    );
}

export default App;
