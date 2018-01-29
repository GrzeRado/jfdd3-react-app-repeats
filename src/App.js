import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import UsersList from './components/UsersList'


import {connect} from 'react-redux'

const App = (props) => (
    <div>
        <UsersList usersData={props.usersData}/>
    </div>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)