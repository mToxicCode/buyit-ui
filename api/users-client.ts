import {IItem} from "~/types/ItemTypes";
import BaseApi from "~/api/base-api";
import {IGetItemByIdResponse, IGetItemsByIdResponse} from "~/api/items-client";

export interface IUser {
    id:	string
    username:	string
    role:	string
    roleMetaData?: IRole
}

export interface IRole {
    name: string,
    description: string,
    rules?: string[]
}

export interface IAuthenticateResponse {
    user: IUser,
    jwtToken: string,
    refreshToken: string
}

export default class UsersClient {
    static async authenticate(login: string, password: string, isExtended: boolean): Promise<IAuthenticateResponse> {
        let result = await BaseApi.getAuthAxios().post<IAuthenticateResponse>(
            `/v1/Auth/authenticate`,
            {
                username: login,
                password: password,
                isExtended: isExtended
            })
        return result.data;
    }

    static async getItemsByIds(ids: number[]): Promise<IItem[]> {
        console.log(ids)
        let response = await BaseApi.getRootAxios().patch<IGetItemsByIdResponse>(`/v1/items`, {ids: ids})
        console.log(response.data.items)
        return response.data.items;
    }
}