import axios from "axios";
import {AxiosInstance} from "axios";

export default class BaseApi{
    static getRootAxios():AxiosInstance {
        return axios.create({
            baseURL: process.env.NUXT_ENV_ROOT_API
        })
    }

    static getAuthAxios():AxiosInstance {
        return axios.create({
            baseURL: process.env.NUXT_ENV_AUTH_API
        })
    }
}