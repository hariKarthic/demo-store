import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Components from "./components"
import registerServiceWorker from './registerServiceWorker';

/*pick a selector to mount the components onto*/

const selector = "[data-component]";

const fetchWrappers = () => {

    const wrapperNodes = document.querySelectorAll(selector);
    return wrapperNodes;

};

/*render the components from the component list onto the fetched hooks */
const renderComponents = (wrapperNodes) => {
    wrapperNodes.forEach((element) => {
        const TagName = Components[element.dataset.component];
        ReactDOM.render(<TagName/>, element)
    });
};

const wrapperNodes = fetchWrappers();
if (wrapperNodes) {
    renderComponents(wrapperNodes);
}

registerServiceWorker();
