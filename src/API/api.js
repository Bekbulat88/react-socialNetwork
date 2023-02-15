import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/' ,
    // headers: {
    //     "API-KEY" : "a0955c3a-c9e0-4a4c-b86c-be65e5b443ca"
    // }
})


export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get (
        `users?page=${currentPage}&count=${pageSize}`,
        ).then( (response) => {return response.data} )
    },
    unfollowUsers (userId) {
       return  instance.delete (
        `follow/${userId}`
          ).then( (response) => {return response.data} )
    },
    followUsers (userId) {
        return  instance.post (
         `follow/${userId}`
           ).then( (response) => {return response.data} )
     }
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`).then(response => {return response});
    },

    login (email, password, rememberMe = false) {
        return  instance.post(`/auth/login`, {email, password, rememberMe})

     },
     logout () {
        return  instance.delete(`/auth/login`)
     }
}

export const profileAPI = {
    getProfile (profileId) {
        // debugger
        return instance.get(`profile/${profileId}`)
        .then(response => {return response.data })
    },
    getStatus (userId) {
        return instance.get(`/profile/status/${userId}`)
    },    
    updateStatus (status) {
        return instance.put(`profile/status`, {status:status})
    }
}


