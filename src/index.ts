import { Shape } from "./shape"

const covid = new Shape("https://disease.sh/")

const req = covid.a("nyt").a("counties").a("Philadelphia").new()

req.get()