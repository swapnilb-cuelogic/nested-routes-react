import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route // for later
} from 'react-router-dom'

import Home from './Home'
import Topics from './Topics'

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
          </ul>

          <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
        </Switch>
      </div>
    </Router>
    )
  }
}
export default App;