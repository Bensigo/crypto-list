import React, {Fragment} from 'react';
import { RouteComponentProps} from "react-router-dom"

// router props which take a parameter of coin
type RProps = {
    coin: string
}

interface IProps extends RouteComponentProps<RProps>{

}

const Detail : React.FC<IProps> = (props) => {
    return (
        <Fragment>
            <h3>Home</h3>
        </Fragment>
    )
}

export default Detail