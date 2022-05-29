export interface IItem {
    id: number
    name: string
    price: number
    description?: string
    ownerId?: string
    imageUrls?: string[]
    rating?: IRating
    inStockAmount: number
    createdAt?: string
}

export interface IItemWithAmount {
    item: IItem
    amount: number
}

export interface IItemInCart {
    itemId: number
    amount: number
}

export interface IImage {
    id: string
    fileName: string
    description: string
    url: string
}

export interface IRating {
    value: number
    reviewCount: number
}