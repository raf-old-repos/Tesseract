import { Request } from "./req";
import { ShapeOptions } from "./types/Options";

export class Shape {
    private _base: string = ""
    private _addend: string = ""
    private _generated: string = ""
    public constructor(base: string, options: ShapeOptions = {}) {
        this._base = base
        this._generated = this._base
    }

    // ! TODO Sanitize URL
    private sanitizeAttachment(attachment: string): string {
        const _attachment = attachment.split("")
        _attachment.forEach((char, idx) => {
            if (char.match("/") || char.match("?")) {
                _attachment.splice(idx, 1)
            }
        })
        return _attachment.toString()
    }

    public a(attachment: string, ...args: any[]): Shape {
        attachment = this.sanitizeAttachment(attachment)

        this._generated = this._generated.concat(attachment.concat("/"))
        return this
    }
    public param(key: string, val: string): Shape {
        key = this.sanitizeAttachment(key)
        val = this.sanitizeAttachment(val)

        this._generated.concat(`?${key}=${val}`)
        return this
    }

    public new(): Request {
        return new Request(this._generated)
    }
}