import axios from "axios"

const API = axios.create({baseURL: 'http://localhost:5000'})

export const login = (authData) => API.post("/users/login",authData)
export const signup = (authData) => API.post("/users/signup",authData)