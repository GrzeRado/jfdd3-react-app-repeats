import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import UsersList from './components/UsersList'
import UserDetails from './components/UserDetails'


import {connect} from 'react-redux'

const App = (props) => (
    <Router>
    <div>
        <Route path="/" exact render={() => (
        <UsersList usersData={props.usersData}/>
            )} />
        /*<Route path="/user-details/:email" component={UserDetails}/>*/
        <Route path="/user-details/:email" render={() => (
            <UserDetails userData={props.userData}/>
    </div>
    </Router>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)