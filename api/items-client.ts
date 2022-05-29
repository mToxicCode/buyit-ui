import axios from "axios";
import Item from "~/pages/item.vue";
import {IItem, IItemInCart} from "~/types/ItemTypes";
import BaseApi from "~/api/base-api";
import {IFilter} from "~/types/filler";
import {IPagination, IPaginationResponse} from "~/types/pagination";
import {ISorting} from "~/types/sorting";
import UsersClient from "~/api/users-client";

export interface IGetItemByIdResponse {
    item: IItem
}

export interface IGetItemsByIdResponse {
    items: IItem[]
}

export interface IGetItemsWithFilterResponse {
    items: IItem[],
    pagination: IPaginationResponse
}

export interface IGetFrontPageAggregationResponse {
    sections: IFrontPageSection[]
}

export interface IFrontPageSection {
    banner: IBanner,
    items: IItem[]
}

export interface IBanner {
    imageUrl: string,
    redirectUrl: string
}

export interface IPlaceOrderRequest {
    itemsInOrder: IItemInCart[],
    dstPlace: string
}

export interface IOrder {
    
}

export default class ItemsClient {
    static async getItemById(id: number): Promise<IItem> {
        let result = await BaseApi.getRootAxios().get<IGetItemByIdResponse>(`/v1/items/${id}`)
        return result.data.item;
    }

    static async getItemsByIds(ids: number[]): Promise<IItem[]> {
        console.log(ids)
        let response = await BaseApi.getRootAxios().patch<IGetItemsByIdResponse>(`/v1/items`, {ids: ids})
        return response.data.items;
    }

    static async getItemsByFilter(filter: IFilter, pagination: IPagination, sorting: ISorting): Promise<IGetItemsWithFilterResponse> {
        let response = await BaseApi.getRootAxios().get<IGetItemsWithFilterResponse>(`/v1/items/with-filter`, {params: pagination})
        return response.data;
    }
    
    static async getFacadeItems(): Promise<IGetFrontPageAggregationResponse> {
        let response = await BaseApi.getRootAxios().get<IGetFrontPageAggregationResponse>('/v1/facade');
        return response.data;
    }
    
    // static async getOrdersByUserId(): Promise 
    
    static async placeOrder(request:IPlaceOrderRequest, token: string): Promise<void> {
        console.log(request)
        let r = await BaseApi.getRootAxios().post('/v1/orders', request, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(r)
    }
}