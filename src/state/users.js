const fetchData = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => )
}

const setUsersData = (data) => ({
  type: SET_USERS_DATA,
  data
})

const initialState = {
    usersData: null
}


export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state
    }
}
