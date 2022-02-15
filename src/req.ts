import { RequestOptions } from "./types/Options";
import { request } from "undici";

export class Request {
    private _url: string = ""
    private body?: any = undefined
    public constructor(cleanUrl: string, options?: RequestOptions) {
        this._url = cleanUrl
    }
    private async _get() {
        const { body } = await request(this._url)
        this.body = body
        return this
    }
    public get() {
        return this._get().then(req => req)
    }
    public async json<T, E>(error?: string | "ERROR"): Promise<{ _res?: T, error: string | undefined}>{
        const _res = await this.body.json()
        if ((_res as T)) {
            return _res
        } else if ((_res as E)) {
            return { _res, error }
        }
        else {
            return {_res, error}
        }
    }
    public async post<T>(callback: () => void): Promise<{res: T, error?: string}>{
        return new Promise
    }
}