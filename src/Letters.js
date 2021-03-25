import React, { Component } from 'react';
import './App.css';
import Draggable from './Draggable'
import './Letters.css';


export default class Letters extends Component {
    state = {
        letters: [
            {name:"A",category:"vowel"},
            {name:"E", category:"vowel"},
            {name:"I", category:"vowel"},
            {name:"O", category:"vowel"},
            {name:"U", category:"vowel"}
        ]
    }


    
    render() {
        var letters = {
            vowel: []
        }

        this.state.letters.forEach ((l) => {
            letters[l.category].push(
                <Draggable><span style={{
                    width: "60px",
                    height: "80px",
                    marginLeft: "2px", 
                    marginTop: "80px",
                    marginRight: "45px", 
                    marginBottom: "-5px",
                    border: "2px solid black",
                    background: "orange"
                }} key={l.name}>
                    {l.name}
                </span></Draggable>
            );
        });
        return (
            <div className="container">
                <h2 className="header">Letters</h2>
                <div className="">
                    <div className="">Vowels
                    <span className="Letter" id="Vowel">{letters.vowel}</span>
                    </div>
                </div>
    
    
            </div>
        );
    }
    

    
}

