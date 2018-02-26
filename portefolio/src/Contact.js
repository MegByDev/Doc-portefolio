import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="InfoPers">
                <ul>
                    <li>GREGO Mégane</li>
                    <li>21 ans</li>
                    <li>gr.benedith@gmail.com</li>
                    <li>0690 722 155</li>
                    <a href="#">Facebook</a>
                    <a href="#">Linkedin</a>
                    <a href="#">Twitter</a>
                </ul>
                <div className="localisation">
                    <p> 6 Ruelle réache 97 180 SAINTE-ANNE</p>
                </div>
            </div>
        );
    }
}

export default Contact;
