import React from 'react'
import UsersList from

import {connect} from 'react-redux'

const App = (props) => (
    <div>
        <UsersList userData={props.userData}/>
    </div>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)