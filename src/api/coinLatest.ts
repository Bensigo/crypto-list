import axios from "axios"

export default async (id: string) => {
    /**
     * Get lastest financial info about a coin with the coin id
    */
   console.log(id)
    const {data} = await axios.get("/.netlify/functions/latest", {params: {id}});
    return data;
}