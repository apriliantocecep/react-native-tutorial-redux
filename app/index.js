import React from 'react';
import { Provider } from "react-redux";

import store from "./configs/store";

import HomeContainer from "./screens/HomeContainer";

const App = () => (
    <Provider store={store}>
        <HomeContainer />
    </Provider>
)

export default App;