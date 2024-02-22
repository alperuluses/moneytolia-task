export interface Campain {
    id: number | string,
    title: string,
    description: string,
    date: string,
    point: number
}

export enum AlertTypes {
    succes = "success",
    danger = "danger"
}

export interface Alert {
    type: AlertTypes,
    text: string
}