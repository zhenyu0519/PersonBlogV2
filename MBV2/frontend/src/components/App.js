import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import PageBase from './layout/PageBase';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PageBase />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));