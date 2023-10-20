import axios from "axios";
import {propsUsersType} from "components/Users/UsersContainer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":'1078d21f-e502-4df3-adb0-f8556c144721'
    }
})

export type authType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}
type PhotosType={
    small:string
    large:string
}


export type ResponseUserType={
    items: propsUsersType[]
    totalCount: number,
    error: string
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseUserType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },

    getFollow(id) {
        return instance.post(`follow/${id}`, {},).then(response => response.data)
    },

    getProfile(userId: number) {
        console.warn('Obsolete method. used ProfileApi ')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/` + userId).then
        (response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    }
}

export const meAPI = {
    getMe() {
        return instance.get(`auth/me/`).then(response => {
            return response.data
        })
    },
    login(value: authType) {
        return instance.post('/auth/login/', {...value}).then(response => response)
    },
    logout(){
        return instance.delete('/auth/login/')
    }
}
