const axios = require("axios")


exports.handler = async function(event, context, callback) {
    const query = event.queryStringParameters;
    const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info"
    const {data} = await axios.get(url, {
        headers: {
            "X-CMC_PRO_API_KEY": process.env.API_KEY ,
        },
        params: {
            id: query.id
        }
    })
    const res = data.data
    console.log(res[Object.keys(res)[0]])
    callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET'
        },
        body: JSON.stringify(res[Object.keys(res)[0]])
        })
}