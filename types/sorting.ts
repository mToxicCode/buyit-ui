export interface ISorting {
    mode: SortingMode,
    type: SortingType
}

export enum SortingMode {
    none, lowToHigh, highToLow
}

export enum SortingType {
    none, byPrice, byRating, byArrival
}