import { RequestOptions } from "./types/Options";
import { request } from "undici";

export class Request<T> {
    private _url: string = ""
    public constructor(cleanUrl: string, options: RequestOptions) {
        this._url = cleanUrl
    }
    public async get() {
        const { body } = await request(this._url)
        const _res = await body.json()
        if (typeof _res  === typeof this){
            return _res
        } else {
            return 
        }
    }
    public async post()
}