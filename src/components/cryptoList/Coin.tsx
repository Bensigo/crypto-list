import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Coin as ICoin } from '../../reducers/cryptos';
import "./style.css"

interface IProps {
    coin: ICoin
    index: number
}

const Coin: React.FC<IProps> = ({coin, index}) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }) 
    const idRef = React.useRef<any>()
    React.useEffect(() => {
        if(idRef){
            const el = idRef.current.innerText
            if(el.includes("-")){
                idRef.current.style.color = "#e74c3c"
            }else {
                idRef.current.style.color = "#1abc9c"
            }
        }
    }, [idRef])
    return (
        <div className="wrapper-sekleton coin" key={index}>
           <div className="sn">{index + 1}.</div>
           <div className="item-data title name" >
               {coin.name}
           </div>
           <div className="item-data title number money" >
               {formatter.format(coin.quote.USD.price)}
           </div>
           <div ref={idRef} className="item-data number title" >
               {parseFloat(coin.quote.USD.percent_change_1h).toFixed(2)}%
           </div>
           <div className="item-data title number sn" >
           {formatter.format(coin.quote.USD.market_cap)}
           </div>
           <div className="item-data graph coin-img-graph " >
               <Hidden xsDown>
                  <img className="mdDown" src="https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/52.png" alt="coin" />
               </Hidden>
           </div>
       </div>
         
   )
}
export default Coin