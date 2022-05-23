import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";


import { Provider } from 'react-redux';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './pages/Administration/RolesModules&Permissions/Styles/GlobalStyles.css';
import { store } from './pages/Administration/RolesModules&Permissions/Store/store';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , rootElement);

serviceWorker.unregister();
