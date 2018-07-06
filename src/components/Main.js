import React, { Component } from 'react';
import {
    scaleBuilder,
    keyDropDown,
    modeDropDown,
    scaleMaker
} from '../helper/builders'

export default class Blank extends Component {
  constructor(props){
      super();
      this.state = {
        modes: [
            'Ionian',
            'Dorian',
            'Phrygian',
            'Lydian',
            'Mixolydian',
            'Aeolian',
            'Locrian'
        ],
        mode: 'Ionian',
        keys: ['C','D','E','F','G','A','B'],
        key: 'C',
        accidental: false,
        sharps: ['F#','C#','G#','D#','A#','E#','B#'],
        scale:  ['C','D','E','F','G','A','B','C'],
        degreeNumerals: [
            'I','II','III','IV','V','VI','VII','I'  
        ],
        degreeNames: [
            'Tonic',
            'Supertonic',
            'Mediant',
            'Subdominant',
            'Dominant',
            'Submediant',
            'Leading Tone',
            'Tonic'
        ]
      }
      this.handleKey = this.handleKey.bind(this)
      this.handleMode = this.handleMode.bind(this)
      this.handleAccidental = this.handleAccidental.bind(this)
    }
    
    componentDidMount(){

        let mode = this.state.mode
        let key = this.state.key
        let scale = scaleMaker(mode,key)
        this.setState({
            scale
        })
    }
    
    handleKey(e){
        let oldKey = this.state.key[0]
        let target = e.target.id
        let newKey = target === 'b' || target === '#' || target === '' ? oldKey+=target : target
        let mode = this.state.mode
        let scale = scaleMaker(mode,newKey)
        this.setState({
            key : newKey,
            scale
        })
        //when key is changed, state.scale is changed
    }

    handleAccidental(e){
        //fix accidental key
        let target = e.target.id
        let key = this.state.key
        let note = key[0]
        let mode = this.state.mode
        if(key[1] === target) key = note
        else key = note+=target
        let scale = scaleMaker(mode,key)
        this.setState({
            key,
            scale,
        })
    }

    handleMode(e){
        let mode = e.target.value
        let key = this.state.key
        let scale = scaleMaker(mode,key)
        this.setState({
            mode,
            scale
        })
    }

    render() {
        let state = this.state
        return (
            <div>
                <h1 className="title">T H E O R Y S C R I P T</h1>
                <div className="mode">
                    mode:
                    <select onChange={this.handleMode}>
                        {modeDropDown(state.modes)}
                    </select>
                </div>
                <br />
                <div className="key">
                    <div 
                        onClick={this.handleKey} 
                        className="btn-group" 
                        role="group" 
                        aria-label="Basic example"
                    >
                        {keyDropDown(state.keys)}
                    </div>
                    <div 
                        onClick={this.handleAccidental} 
                        className="btn-group" 
                        role="group" 
                        aria-label="Basic example"
                    >
                        <button id="b" type="button" className="btn btn-secondary">
                            {'b'}
                        </button>
                        <button id="#" type="button" className="btn btn-secondary"> 
                            {'#'}
                        </button>
                    </div>
                    <br />
                    <div>
                        Key: {state.key}
                    </div>
                </div>
                <br />
                <div className="scales d-flex align-content-stretch flex-wrap">
                    {scaleBuilder(state.scale)}
                    {scaleBuilder(state.degreeNumerals)}
                    {scaleBuilder(state.degreeNames)}
                </div>
                <div>
                    Triads
                </div>
            </div>
        );
    }
}