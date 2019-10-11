import axios from "axios"


export default  async(index: number)  => {
        const uri = "/.netlify/functions/cryptos"
        const  data  = await axios.get(uri, {params: {
            index: index
        }});
        console.log(data.data[0])
        return data.data;    
}