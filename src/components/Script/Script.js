import React, { Component } from 'react';
import {
    SemitonalDistance,
    ScaleMaker,
    NextSemitone,
    DiatonicNumberCalculator,
    Gaggablog
} from './functions'



export default class ScriptPage extends Component {
    render() {
        return (
            <div>
                <h2 className="">Javascript</h2>
                <div className="text-left">
                    <SemitonalDistance />
                    <DiatonicNumberCalculator />
                    <NextSemitone />
                    <ScaleMaker />
                    <Gaggablog />
                </div>
            </div>
        );
    }
}