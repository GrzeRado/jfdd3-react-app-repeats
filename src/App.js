import React from 'react'

import {connect} from 'react-redux'


const App = (props) => (
    <div>
        {
            prop.usersData.map(user => (
                <div><div>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
    )(App)