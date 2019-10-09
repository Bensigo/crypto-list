import React, {Fragment} from 'react';
import { RouteComponentProps} from "react-router-dom"
import ErrorBountry from "../../components/ErrorBountry"
import Nav from "../../components/nav"
import  Card  from '@material-ui/core/Card';
import "./style.css"

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
                <Nav />      
                    <Card  className="home-card wrapper ">
                        <h2>hello</h2>
                    </Card>
            </ErrorBountry>
        </Fragment>
    )
}

export default Detail