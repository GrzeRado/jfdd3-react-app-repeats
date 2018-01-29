const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUsersData = (data) => ({
    type: SET_USERS_DATA,
    data
})



const fetchData = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => dispatch(setUsersData(data)))
}

const initialState = {
    usersData: null
}


export default (state = initialState, action) => {
    switch (action.type){
        return {
            ..state,
                usersData: action.data
        }
        default:
            return state
    }
}
