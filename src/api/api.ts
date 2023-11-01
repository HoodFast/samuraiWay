import axios from "axios";
import {propsUsersType} from "components/Users/UsersContainer";
import {logout} from "../Redux/auth-reducer";
import {propsProfileType} from "../Redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY":"24f46ba0-82ea-47f4-a77e-c49ece68c22d"
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
    },
    updatePhoto(photo) {

        let formData = new FormData()
        formData.append("image", photo)
        return instance.put(`profile/photo/`, formData)
    },
    saveProfile(profile: propsProfileType){
        return instance.put(`profile/`, profile)
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
