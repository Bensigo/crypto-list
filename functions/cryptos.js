const axios  = require("axios");

exports.handler = async function(event, context, callback) {
    const query = event.queryStringParameters
    console.log(query)
    const uri = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
    const {data} = await axios.get(uri, {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.API_KEY || "ffee75f6-5399-4362-92f5-ff2d2d629698"
        },
        params: {
            start: query.index,
            limit: 200
        }
    })
    callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(data.data)
    });
}