import React from "react";
import axios from 'axios';
import {baseUrlUser} from '../shared/baseUrl'

export const AuthSignUp =(user)=>{

return axios.post(baseUrlUser+'signup', {
    firstname: user.firstname,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    password:user.password

})

}

export const postSignUp = (body) => {
    return fetch(baseUrlUser+'signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    });
};



export const postSignIn =(body)=> {


    return fetch(baseUrlUser+'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })

};




export function logout () {
    localStorage.removeItem('auth');

}

export const isLogin = () => {
    if (localStorage.getItem('auth')) {
        return true;
    }

    return false;
}