import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PageBase from './layout/PageBase';

class App extends Component {
    render() {
        return <PageBase />
    }
}


ReactDOM.render(<App />, document.getElementById('app'));