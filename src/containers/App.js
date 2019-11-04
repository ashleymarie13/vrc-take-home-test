import React, { Component } from 'react';
import { Provider } from 'react-redux'
import '../App.css'; // TODO do css
import configureStore from '../configureStore'
import AdvancedSearchApp from './AdvancedSearchApp'

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AdvancedSearchApp />
            </Provider>
        )
    }
}
