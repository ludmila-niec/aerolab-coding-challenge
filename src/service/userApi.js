import { headers } from "./apiConfig";
const baseUrl = "https://coding-challenge-api.aerolab.co/user";

// GET user personal information.
export async function getUserData() {
  try {
    const response = await fetch(`${baseUrl}/me`, { headers });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err, "Error fetching user personal information");
    throw err;
  }
}

// POST Add points to your user.
export async function addPoints(amount) {
  try {
    const response = await fetch(`${baseUrl}/points`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ amount }),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err, "Error trying to add more points");
    throw err;
  }
}

// GET user redeem history.
export async function getUserHistory() {
  try {
    const response = await fetch(`${baseUrl}/history`, { headers });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err, "Error fetching user redeem history");
    throw err;
  }
}
