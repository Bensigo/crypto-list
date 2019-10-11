import React, {Fragment} from 'react';
import ErrorBountry from "../../components/ErrorBountry"
import { RouteComponentProps} from "react-router-dom"

// router props which take a parameter of coin
type RProps = {
    coin: string
}
interface IProps extends RouteComponentProps<RProps> {

}

const Detail : React.FC<IProps> = (props) => {
    return (
        <Fragment>
            <ErrorBountry>
              <h3>Detail</h3>
            </ErrorBountry>
        </Fragment>
    )
}

export default Detail