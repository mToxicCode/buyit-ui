import { Middleware } from '@nuxt/types'
import {NuxtCookies} from "cookie-universal-nuxt";
import UsersClient from "~/api/users-client";

const cartStorageFetching: Middleware = (context) => {
    if(process.browser) 
        context.app.store!.dispatch("cart-store/loadCart");
}

export default cartStorageFetching