import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store  from '../js/store/index';
import Routes from "../components/routes";

 class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}
export default App;
