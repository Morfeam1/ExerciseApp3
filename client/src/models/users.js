

import { myFetch } from "./my-fetch";



export function getList() {
    return myFetch('users');
}

export function getUserID(id) {
    return myFetch('users/' + id);
}

export function addUser(FirstName, LastName, DOB, Password, User_Type, Email){
    return myFetch('users/add', { FirstName: FirstName, LastName: LastName, DOB: DOB, Password:Password, User_Type: User_Type, Email: Email});
}

export function addUser2(user){
    console.log("user:" + user);
    return myFetch('users/add/:' + user);
}
