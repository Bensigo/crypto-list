import React from 'react';
import { Coin as ICoin } from '../../reducers/cryptos';
import Coin  from "./Coin"
import Hidden from '@material-ui/core/Hidden';

interface IProps {
    cryptos: Array<ICoin>
}



const CryptoList: React.FC<IProps> = ({cryptos}) => {
   

    const Headers = () => {
        return (
          <div className="wrapper-sekleton ">
            <div className="title ">#</div>
            <div className=" title name o-m">Name</div>
            <div className="title number ">Price</div>
            <div className="title number" >%Change(1hr)</div>
            <div className=" title number">Market cap</div>
            <Hidden xsDown>
               <div className="title">Price graph</div>
            </Hidden>
            
          </div>
        );
      };
      ;
      return (
        <React.Fragment>
          <div >
            <Headers />
            {
            cryptos.map((coin: ICoin, index: number) => 
               <Coin coin={coin} index={index} />
            )}
          </div>
        </React.Fragment>
      );
}

export default CryptoList;