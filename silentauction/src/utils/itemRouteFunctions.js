import React from 'react'
import {axiosWithAuth} from './axiosWithAuth'

export function getItems(cb,state,title){
    axiosWithAuth().get('/api/items/')
    .then(res=>cb({...state,[title]:res.data}))
    .catch(err=>console.log(err.message))
}

export function getSellerItems (id,cb){
    axiosWithAuth().get( `/api/items/seller/${id}`  )
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function findItembyId(id,cb){
    axiosWithAuth().get(`/api/items/${id}`)
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function updateItem(id,cb,data){
    axiosWithAuth().put(   `api/items/${id}`,data  )
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function deleteItem(id,){
    axiosWithAuth().delete(`api/items/${id}`)
    .then(res=>console.log('success'))
    .catch(err=>console.log(err))
}

export function postItem(data,cb){
    axiosWithAuth().post('api/items/',data)
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

const itemFunctions = {
    getItems,
    getSellerItems,
    findItembyId,
    updateItem,
    deleteItem,
    postItem
}

export default itemFunctions