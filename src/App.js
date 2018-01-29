import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import UsersList from './components/UsersList'


import {connect} from 'react-redux'

const App = (props) => (
    <Router>
    <div>
        <Route patch="/" exact render={() => (
        <UsersList usersData={props.usersData}/>
            )} />
        <Route patch="/user-details/:email" component={UserDetails}/>
    </div>
    </Router>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)