import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

//component 
function App() { //capitalized
    return null; //must return something
}

//anchor element
const rootElement = document.getElementById('root');
//
ReactDOM.render( //append
    React.createElement(App), //this element
    rootElement //here
);

