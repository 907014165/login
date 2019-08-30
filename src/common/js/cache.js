import storage from 'good-storage'
const TOKEN_KEY = '__token__'
export function setToken(token){
    storage.set(TOKEN_KEY,token)
}

export function getToken(){
    return storage.get(TOKEN_KEY,'')
}

export function removeToken(){
    storage.remove(TOKEN_KEY)
}