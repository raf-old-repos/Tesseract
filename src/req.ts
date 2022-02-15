import { EUT, PostOptions, PostReturnType, RequestOptions } from "./types/Options";
import Undici, { request } from "undici";

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
    public async json<T, E>(error?: string | "ERROR"): Promise<{ _res?: T, error: string | undefined }> {
        const _res = await this.body.json()

        return (_res as T) ? _res : { _res, error }
    }

    public async post<T>(load: PostOptions): Promise<PostReturnType<T>> {
        return new Promise<PostReturnType<T>>(async (resolve, reject) => {
            try {
                const { headers, body, statusCode } = await Undici.request(this._url, {
                    method: "POST",
                    body: load.body?.toString(),
                    headers: load.headers
                })

               const rasterizedBody = await body.json()


                if (rasterizedBody as T) {
                    return resolve({ headers, rasterizedBody, statusCode })
                } else {
                    return reject(`Response of type "${typeof rasterizedBody}" does not match provided control type`)
                }


            } catch (e) {
                return reject(e)
            }
        })
    }
}