import axios from 'axios'

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'https://silent-auction2-backend.herokuapp.com',
        headers:{
            Authorization:token
        }
    })
}

