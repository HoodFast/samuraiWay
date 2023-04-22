import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export type authType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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
    },
    postLogin(value: authType) {

        return instance.post('/auth/login/', {...value}).then(response => response)
    },
    logoutMe(){

        return instance.delete('/auth/login/')
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
    }
}
