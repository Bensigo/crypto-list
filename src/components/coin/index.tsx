import * as React from 'react';
import { ICoinMeta, Coin } from '../../reducers/cryptos';
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import './style.css'


interface IProps {
    meta: ICoinMeta | null
    coin: Coin| null
}

const CoinDetail: React.FC<IProps> = ({meta, coin}) => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }) 
    const precentRef = React.useRef<any>()
    React.useEffect(() => {
        if(precentRef && coin != null){
            const el = precentRef.current.innerText
            console.log("ele",el)
            if(el.includes("-")){
                precentRef.current.style.color = "#e74c3c"
            }else {
                precentRef.current.style.color = "#1abc9c"
            }
        }
    }, [precentRef, coin])


   if(coin !== null && meta !== null ){
    return (
        <React.Fragment>
            <div className="card">
      <Grid container className="wrapper">
        <Grid item>
          <img className=" img" src={meta.logo} alt="coin" />
        </Grid>
        <Grid item>
            <Typography variant="h6" className="coin-title">{meta.name}</Typography>
          <Grid container>
            <Typography variant="subtitle1" className="content price">{formatter.format(coin.quote.USD.price)}</Typography>
            <Typography ref={precentRef} variant="subtitle1" className="content" >{parseFloat(coin.quote.USD.percent_change_1h).toFixed(2)}%</Typography>
          </Grid>
          <Grid container>
            <a className="link-btn" rel="noreferrer noopener" href={meta.urls.website[0]} target="_blank">Website</a>
            <a className="link-btn" rel="noreferrer noopener"  href={meta.urls.explorer[0]} target="_blank" >Explorer</a>
            
          </Grid>
        </Grid>
      </Grid>
      <Grid direction="column" container>
        <Typography variant="subtitle1" className="coin-subtitle" >About {meta.name}</Typography>
        <Typography className="coin-text " variant="body1" >
            {meta.description.slice(0, 200)}...<a className="link" rel="noreferrer noopener"  href={meta.urls.technical_doc[0]} target="_blank">More</a>
        </Typography>
        <Grid container justify="flex-start">
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item " />
          </Grid>
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item " />
          </Grid>
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item " />
          </Grid>
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item " />
          </Grid>
        </Grid>
        <div className="graph " />
      </Grid>
    </div>
        </React.Fragment>
    )
   }
   return <Typography>Not fount</Typography>
}

export default CoinDetail