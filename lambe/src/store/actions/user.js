import {USER_LOGGED_IN, USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from "./actionTypes";
import axios from 'axios';
import {setMessage} from "./message";

const authBaseURL = 'authurL';
const API_KEY = 'API_KEY';

export const userLogged = (user) => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = (user) => {
    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .then(res => {
            if (res.data.localId) {
                dispatch(loadingUser());
                axios.put(`/users/${res.data.localId}.json`, {
                    name: user.name
                }).then(() => {
                    dispatch(login(user));
                }).catch(err => {
                    dispatch(setMessage({title: 'Erro', text: 'Ocorreu um erro inesperado.'}));
                })
            }
        }).catch(err => console.log(err));
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser());
        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        })
        .then(res => {

            if (res.data.localId) {
                user.token = res.data.idToken;
                axios.get(`/users/${res.data.localId}.json`)
                    .then(res => {

                        delete user.password;
                        user.name = res.data.name;
                        dispatch(userLogged(user));
                        dispatch(userLoaded());

                    }).catch(err => {
                        console.log(err);

                    });
            }

        }).catch(err => {
            console.log(err);
            dispatch(setMessage({title: 'Ops :(', text: 'Email/Senha incorretos'}));

        });
    }
}