import axios from "axios"


export default  async()  => {
   
    const uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
    const options = {
        headers: {
            "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY
        }
    }
    const { data } = await axios.get(uri, options);
    console.log(data)
    return data.data;
}