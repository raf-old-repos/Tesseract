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
        return ""
    }

    public a(attachment: string, ...args: any[]): Shape {
    

        this._generated = this._generated.concat(attachment.concat("/"))
        return this
    }
    public param(key: string, val: string): Shape {
        this._generated.concat
        return this
    }

    public new(): Request {
        return new Request()
    }
}