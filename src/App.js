import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';

export default () => {
    return(
        <Provider>
            <div>
                <h1>NOTEPAD</h1>
                <Routes />
            </div>
        </Provider>
    );
};