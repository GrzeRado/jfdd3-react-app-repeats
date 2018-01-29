import React from 'react'

const UserDetails = props => (
const arryWithUsers = props.usersData
const currentUserEmail = props.match.params.emai
const currentUserData = arrayWithUsers.filter(
    user => user.email === currentUserEmail
)[0]
return (
    <div>
        {
            JSON.stringify(currentUserData)
        }

    </div>
)

export default UserDetails