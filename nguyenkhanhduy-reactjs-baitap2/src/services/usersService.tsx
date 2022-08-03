import { User } from "../shared/interfaces/user"
import api from "./api"

const getUserById = (id: string) => {
    return api.get(`${api.url.users}/${id}`).then(res => res.data)
}

const getUsers = () => {
    return api.get(api.url.users).then(res => res.data)
}

const updateUser = (id: string, data:User) => {
    return api.put(`${api.url.users}/${id}`, data).then(res => res.data)
}

const usersService = {
    getUserById,
    getUsers,
    updateUser
}

export default usersService;