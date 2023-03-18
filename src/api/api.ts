import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})



export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}


export const followAPI = {
    unFollow(id){
        return instance.delete(`follow/${id}`).then(response=>response.data)
    },
    getFollow(id){
        return instance.post(`follow/${id}`, {}, ).then(response=>response.data)
    }
}