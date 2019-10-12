import axios from "axios"


export default  async(index: number)  => {
        const uri = "/.netlify/functions/cryptos"
        const  {data}  = await axios.get(uri, {params: {
            index: index
        }});
        return data;    
}

