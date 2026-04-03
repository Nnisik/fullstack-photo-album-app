import {API_ADRESS} from "../utils/constants/apiAdress.ts";

export async function getAllUserPosts(userId:number) {
    const apiURL:string = API_ADRESS + "api_v1/post/" + userId
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    }
    catch (error) {
        console.log(error)
    }
}

export const postNewPost = () => {}