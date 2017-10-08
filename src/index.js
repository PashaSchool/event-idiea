import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
//style
import './index.css'

import reducer from './reducers/reducer'
//component
import App from './App'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);