import React, { Component } from 'react';
import Header from './Header.js';
import Competances from './Competances.js';
import Contact from './Contact.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div id="contenaire">
                    { /*<!--PRESENTATION-->*/}

                    <div id="Infos">

                        <Competances />
                        <Contact />

                    </div>
                </div>
            </div>
        );
    }
}

export default App;
