import * as React from 'react';
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "./lib/theme";
import Header from "./components/Header";
import {Provider} from "react-redux";
import store from "./reducers";


const root = createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Header />
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);