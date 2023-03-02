import {$axios} from "../http/api.js";

class Auth {
    async main(userName, userPassword, type) {
        try {
            const { data } = $axios.post(`/auth${type}`, {
                username: userName,
                password: userPassword
            })

            // if (data.token) {
            //     localStorage.setItem('token', data.token)
            // }

            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export default new Auth()