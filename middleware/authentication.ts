import { Middleware } from '@nuxt/types'
import {NuxtCookies} from "cookie-universal-nuxt";
import UsersClient from "~/api/users-client";

const authentication: Middleware = async (context) => {
    let authResponse = await UsersClient.authenticate("string", "string", true);
    context.app.$cookies.set("refreshToken",authResponse.refreshToken)
    context.app.$cookies.set("jwtToken",authResponse.jwtToken)
    context.app.$cookies.set("isExtended",true)
}

export default authentication