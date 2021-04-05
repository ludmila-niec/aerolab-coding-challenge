import { headers } from "./apiConfig";
const baseUrl = "https://coding-challenge-api.aerolab.co/redeem";
// POST Claim a product and add it to the user’s redeem history

export async function redeemProduct(productId) {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ productId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "Fail to reddem product with id: ", productId);
  }
}
