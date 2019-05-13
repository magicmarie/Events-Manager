import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store  from '../js/store/index';

 class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <div>
                    <h2>Welcome to Events Manager </h2>
                </div>
            </Provider>
        );
    }
}
export default App;
