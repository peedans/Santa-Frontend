import React from 'react'
import NavbarData from '../../Data/NavbarData/NavbarData';

import ActivityData from '../../Data/ActivityData/ActivityData';
import './Data.css';

const Data = () => {
    return (
        <body className="App">
            <header>
                <NavbarData />
            </header>
            <section className="Data">
                
                <ActivityData className="ActivityData" />
            </section>

        </body>
    );
}

export default Data