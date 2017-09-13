import './index.scss'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import App from './containers/App'

const $app = document.getElementById('root')

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  $app
)
