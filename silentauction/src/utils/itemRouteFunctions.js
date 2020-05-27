import React from 'react'
import {axiosWithAuth} from './axiosWithAuth'

export function getItems(cb){
    axiosWithAuth().get('/')
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function getSellerItems (id,cb){
    axiosWithAuth().get( `/seller/${id}`  )
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function findItembyId(id,cb){
    axiosWithAuth().get(`/${id}`)
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function updateItem(id,cb,data){
    axiosWithAuth().put(   `/${id}`,data  )
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function deleteItem(id,cb,){
    axiosWithAuth().delete(`/${id}`)
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}

export function postItem(data,cb){
    axiosWithAuth().post('/',data)
    .then(res=>cb(res.data))
    .catch(err=>console.log(err))
}