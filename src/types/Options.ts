export type ShapeOptions = {

}

export type RequestOptions = {}

export type PostReturnType<T> = { rasterizedBody: T, headers: string[], statusCode: number }

export enum EUT {
    EMPTY = ""
}
export type PostOptions = {
    body?: any,
    headers?: { [key: string]: string }[],
}