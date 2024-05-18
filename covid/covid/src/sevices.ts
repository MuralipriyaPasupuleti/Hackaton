
import axios from 'axios';

const BASE_URL = "https://disease.sh/v3/covid-19/countries/usa";

export interface AffectedResponse{
    country:string
    cases:number
    deaths:number
}

export const getAffected = async (country: string):Promise<AffectedResponse>  =>{
    const results= await axios.get(BASE_URL, {
        params: {
            q: country
        }
    })
    return {
    }
}
