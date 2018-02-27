import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Components from "./components"
import registerServiceWorker from './registerServiceWorker';



const selector = "[data-component]";

const fetchWrappers = () => {

    const wrapperNodes = document.querySelectorAll(selector);
    console.log(wrapperNodes);

    return wrapperNodes;

};

const renderComponents = (wrapperNodes) => {
    wrapperNodes.forEach( (element ) => {
        const TagName = Components[element.dataset.component];
        ReactDOM.render(<TagName/>,element)
    })



}

const wrapperNodes = fetchWrappers();
if(wrapperNodes){
    renderComponents(wrapperNodes);
}



registerServiceWorker();
