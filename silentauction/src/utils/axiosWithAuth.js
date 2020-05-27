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

export function axiosAuthreq(path,type,cb){
    axiosWithAuth()[type](path)
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

 