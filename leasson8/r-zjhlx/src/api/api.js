import axios from 'axios'

export function addlist(params){
    const url = '/zsgc/addUser'
    return axios.post(url,(params))

}