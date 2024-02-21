import axios from "axios";

const unauthorizedCode = [401]
let retryCount = 0
const maxRetries = 3

const BaseService = axios.create({
    timeout: 60000,
    baseURL: "http://localhost/digi-dairy-apis/v1",
})




BaseService.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        
        console.log("Access token sent",accessToken);
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        console.log("Config message" ,config);
        return config
    },
    (error) => {
        console.log("error wewe");
        return Promise.reject(error)
    }
)

BaseService.interceptors.response.use(
    async (response) => response,
    async (error) => {
       
        const accessToken = localStorage.getItem('token')
        // console.log("Have they logged in?",isLoggedIn)
        // console.log("Current token",currentToken)
        const { response } = error

        // console.log("Response: ",response)
        if (response && unauthorizedCode.includes(response.status)) {
            console.log(response)
            if (response && response.status === 401) {
                const originalRequest = error.config;
                try {
                    console.log("Attempting to refresh token...")

                    // Call your refresh token endpoint here
                    const refreshResponse = await apiGetRefreshToken({
                        "email": "fidel@gmail.com",
                    })

                    console.log("Refresh response",refreshResponse)

                    localStorage.setItem('token', refreshResponse.data.token)


                    originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.data.token}`;
                    return BaseService(originalRequest);
                } catch (refreshError) {
                    console.log("Refresh error:",refreshError)

                    if (retryCount < maxRetries) {
                        retryCount++;
                        return BaseService(originalRequest);
                    } else {
                        // Direct the user to login
                        console.log("Has signed them out again")
                    }
                }
            } 
            // else {
            //     // Direct the user to login
            //     console.log("Has signed them out again")
            // }
        }

        return Promise.reject(error);
    }
)

export default BaseService