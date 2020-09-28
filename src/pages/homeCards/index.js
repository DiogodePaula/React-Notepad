import React from 'react';
import { Link } from 'react-router-dom'


export default () => {
    return(
        <div>
            <h2>Minha Home Page</h2>
            <Link to="/list">ir para list page</Link>
        </div>
    );
};