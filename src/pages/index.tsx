import React, {Fragment} from 'react';
import { RouteComponentProps} from "react-router-dom"
import ErrorBountry from "../components/ErrorBountry"



// router props which take a parameter of coin
type RProps = {
    coin: string
}

interface IProps extends RouteComponentProps<RProps>{

}

const Detail : React.FC<IProps> = (props) => {
    return (
        <Fragment>
            <ErrorBountry>
                <h3>Home</h3>
            </ErrorBountry>
        </Fragment>
    )
}

export default Detail