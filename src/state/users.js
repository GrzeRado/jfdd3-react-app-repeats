const SET_USERS_DATA = 'users/SET_USERS_DATA'

const setUsersData = (data) => ({
    type: SET_USERS_DATA,
    data
})


export const fetchUsersData = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => dispatch(setUsersData(data)))
}

const initialState = {
    usersData: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                usersData:
                action.data.results
            }
        default:
            return state
    }
}
