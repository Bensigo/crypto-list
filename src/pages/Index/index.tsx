import React, {Fragment, useEffect, useState} from 'react';

import ErrorBountry from "../../components/ErrorBountry"
import Nav from "../../components/nav"
import  Card  from '@material-ui/core/Card';
import {connect } from "react-redux"
import { getCryptos } from "../../actions/cryptos"
import TablePagination from '@material-ui/core/TablePagination';
import {Coin} from "../../reducers/cryptos"
import "./style.css"
import { IState } from '../../reducers';
const SekletonLoading = React.lazy(() => import("../../components/CryptoListSekleton")) 
const CryptoList = React.lazy(() => import("../../components/cryptoList")) 



interface IProps {
    loading: boolean,
    cryptos: Array<Coin> | [],
    getCryptos: (index: number) => void
}

export const Index : React.FC<IProps> = ({loading, cryptos, getCryptos}) => {
    const [page, setPage] = useState(0);
    const [index, setIndex] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    useEffect(() => {
        getCryptos(index);

    }, [getCryptos, index])

    useEffect(() => {
    }, [cryptos])

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
      };
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        setIndex(+index)
      };
    return (
        <Fragment>
            <ErrorBountry>
                <Nav />      
                    <Card  className="home-card wrapper col ">
                        <h2 className="header">Top 200 Cryptocurrency by Market Cap</h2>
                        {loading ? <SekletonLoading /> : 
                        <div>
                            <CryptoList cryptos={[...cryptos].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
                            <TablePagination
                                rowsPerPageOptions={[5,10, 20]}
                                component="div"
                                count={cryptos.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                backIconButtonProps={{
                                  'aria-label': 'previous page',
                                }}
                                nextIconButtonProps={{
                                  'aria-label': 'next page',
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </div>
                        }
                    </Card>
            </ErrorBountry>
        </Fragment>
    )
}

const mapStateToProps = (state:IState) => ({
    loading: state.shared.loading,
    cryptos: state.crypto.cryptos
})

const mapDispatchToProps = (dispatch: Function) => ({
    getCryptos: (index: number) => dispatch(getCryptos(index))
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Index))