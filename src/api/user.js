import axios from './config'

export function getUserInfo(){
    const url = '/api/userInfo'
    const data = {
    }
    axios.get(url,{
        params:data
    }).then(res=>{
        return Promise.resolve(res.data)
    })
}