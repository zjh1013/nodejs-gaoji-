import axios from 'axios'
export function addlist (params){
    const url = '/home/val'
    return axios.post(url,{params})

}