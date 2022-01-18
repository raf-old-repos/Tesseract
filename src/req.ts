import { RequestOptions } from "./types/Options";
import { request } from "undici";

export class Request {
    private _url: string = ""
    private body?: any = undefined
    public constructor(cleanUrl: string, options?: RequestOptions) {
        this._url = cleanUrl
    }
    public async get() {
        const { body } = await request(this._url)
        this.body = body
        return this
    }
    public async json<T, E>(error?: string | "ERROR") {
        const _res = await this.body.json()
        if ((_res as T)) {
            return _res
        } else if ((_res as E)) {
            return { _res, error }
        }
        else {
            return false
        }
    }
    public async post() {

    }
}