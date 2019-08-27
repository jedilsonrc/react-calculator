import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

//Linkedin Developer - https://www.linkedin.com/in/edilson-costa/


const elementRoot =  document.getElementById('root');


ReactDOM.render(

        <div>
            <h1>Calculator Project</h1>
            <Calculator />
         
        </div>
    
    
    
    ,elementRoot);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
