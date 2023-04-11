const setcurrentUser = (data) => {
    return{
        type:"FETCH_CURRENT_USER",
        payload:data
    }
}

export default setcurrentUser;

// here we are using current user id from the local stroage 
// from here we go to reducers file in currentUser.js