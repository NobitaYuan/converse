import axios from "axios";

axios.defaults.withCredentials = false;

const request = axios.create({
    baseURL:'http://localhost:3000'
})


request.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => Promise.reject(err)
)

request.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (err) => Promise.reject(err)
)
// 导出配置好的axios
export default request;