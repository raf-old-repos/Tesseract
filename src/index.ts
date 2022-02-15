
import { Shape } from "./shape"

const covid = new Shape("https://disease.sh/")

const CovidShape = covid.a("nyt").a("counties").a("Philadelphia").new()

type CovidResponse = {
    date: string,
    county: string,
    state: string,
    fips: string,
    cases: number,
    deaths: number,
    updated: number
}
type _error<T> = {
    _res?: T
    error?: string
}

type Error = Promise<_error<CovidResponse>>

const main = async (): Promise<void> => {
    // get data
    const data: CovidResponse | Error = (await CovidShape.get()).json<CovidResponse, Error>()
    const { rasterizedBody, headers, statusCode } = await CovidShape.post<CovidResponse>({
        headers: [{"auth": "lol"}], 
        body: {
            hello: "world"
        }
    })


    
}

main()