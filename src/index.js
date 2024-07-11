// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ManagementProvider } from './contexts/ManagementContext';

ReactDOM.render(
    <ManagementProvider>
        <App />
    </ManagementProvider>,
    document.getElementById('root')
);
