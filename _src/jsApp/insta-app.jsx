import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import store from "./clientui/store/ClientStore";
import ClientUI from "./clientui/ClientUI";
import '@themesberg/flowbite';

ReactDOM.render(
    <Provider store={store}>
        <ClientUI />
    </Provider>,
    document.getElementById('InstaAppContainer')
);
