import axios from 'axios';

const url = {
    baseUrl : 'https://62ea194c01787ec712210761.mockapi.io',
    users : '/users',
}

const instance = axios.create({
    baseURL : url.baseUrl,
    headers: {
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

const api = {
    url,
    instance,
    get:instance.get,
    put:instance.put,
    delete:instance.delete,
    post:instance.post
}



export default api;


