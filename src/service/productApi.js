import { headers } from "./apiConfig";
const baseUrl = "https://coding-challenge-api.aerolab.co/products";

// GET get all the products available 
export async function getProducts(){
    try{
        const response = await fetch(baseUrl, {headers})
        const data = await response.json()
        return data;

    }catch(err){
        console.error(err, "Error fetching products list")
    }
}