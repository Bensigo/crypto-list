import React, {Fragment, useEffect} from 'react';
import ErrorBountry from "../../components/ErrorBountry"
import { RouteComponentProps} from "react-router-dom"
import {getCoinMeta, getCoin} from "../../actions/cryptos"
import { IState } from '../../reducers';
import {connect} from "react-redux"
import { Coin, ICoinMeta } from '../../reducers/cryptos';
import Nav from "../../components/nav"
import DetailShimmer from "../../components/DetailShimmer"
import CoinDetail from "../../components/coin"
import  Card  from '@material-ui/core/Card';


// router props which take a parameter of coin
type RProps = {
    id: string
}
interface IProps extends RouteComponentProps<RProps> {
    loading: boolean
    coinMeta: ICoinMeta| null,
    coinLatetest: Coin| null,
    getCoin: (id: string) => void
    getMeta: (id: string) => void
}

const Detail : React.FC<IProps> = (props) => {
    const {getCoin, getMeta, match, coinLatetest, coinMeta, loading} = props
    const id = match.params.id

    useEffect(() => {
        // call get coin metadata 
        getMeta(id)
    }, [getMeta,id])
    useEffect(() => {
        // call get coin 

        getCoin(id)
    }, [getCoin, id])

    useEffect(() => {
        if(coinLatetest) console.log(coinLatetest)
    }, [coinLatetest])

    useEffect(() => {
        if(coinMeta)console.log(coinMeta)
    }, [coinMeta])
    return (
        <ErrorBountry>
            <Fragment>
                  <Nav />
                  <Card className="home-card wrapper col" >
                     {loading ? <DetailShimmer /> :
                    <CoinDetail meta={coinMeta} coin={ coinLatetest} />
                    }
                  </Card>  
            </Fragment>
        </ErrorBountry>
    )
}

const mapStateToProps = (state:IState) => ({
    loading: state.shared.loading,
    coinMeta: state.crypto.coinMeta,
    coinLatetest: state.crypto.coin 
})

const mapDispatchToProps = (dispatch: Function) => ({
    getCoin: (id: string) => dispatch(getCoin(id)),
    getMeta: (id:string) => dispatch(getCoinMeta(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)