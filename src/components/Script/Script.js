import React, { Component } from 'react';
import Functions from './Functions'

export default class ScriptPage extends Component {
    render() {
        return (
            <div className="script">
                <h2 className="script-language">Javascript</h2>
                <div className="text-left">
                    <Functions />
                </div>
            </div>
        );
    }
}