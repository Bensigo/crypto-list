import React, {Fragment} from 'react';
import ErrorBountry from "../../components/ErrorBountry"

interface IProps {

}

const Index : React.FC<IProps> = (props) => {
    return (
        <Fragment>
            <ErrorBountry>
              <h3>Detail</h3>
            </ErrorBountry>
        </Fragment>
    )
}

export default Index