import React from 'react';
import { Link } from 'react-router-dom';
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <h1> Main something here. Just because </h1>
                <Link to="/">Go Back!</Link>   
            </div>
        )
    }
}