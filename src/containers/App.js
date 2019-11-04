import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import AdvancedSearchApp from './AdvancedSearchApp'
// REMOVE for testing
import { fetchWorlds, updateSearchText } from '../actions/actions'
const store = configureStore();

store.dispatch(updateSearchText("hi"))
store.dispatch(fetchWorlds({
    search: 'sleep night',
    sort: 'popularity',
    platform: 'standalonewindows,android',
  })).then(() => console.log(store.getState()))


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AdvancedSearchApp />
            </Provider>
        )
    }
}
