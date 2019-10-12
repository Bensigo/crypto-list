import axios from "axios"

export default async (id: number) => {
    /**
     * Get informantion about a coin with the coin id
    */
    const {data} = await axios.get("/.netlify/functions/coin", {params: {id}});
    return data;
}