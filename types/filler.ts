import {IPagination} from "~/types/pagination";

export interface IFilter {
    priceMin: number,
    priceMax: number,
    reviewCountMin: number,
    reviewCountMax: number,
    deliveryDeadline: DeliveryDeadline,
    categories: number[]
}

export enum DeliveryDeadline {
    default, express, today, twoDays, fiveDays
}

