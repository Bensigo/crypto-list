import React, { Component, Fragment } from 'react'
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
// import {withRouter, RouteComponentProps } from "react-router-dom"
import {connect } from "react-redux"
import { IState } from '../../reducers';


interface IApp {
  hasError: boolean
}
interface IProps   {
  error: string | null,

}

class ErrorBoundry extends Component <IProps,IApp>{
  constructor(props: any){
    super(props)
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(info: any, error: any){
    this.setState({hasError: true})
    console.log(info)
    console.log(error)
  }
   static getDerivedStateFromError(error: any){
    return {
      hasError: true
    }
   }
   componentDidUpdate(prevProps:IProps, prevState: IApp){
    if (prevProps.error !== this.props.error){
      this.setState({hasError: true})
    }
   }
   
  render() {
    if (this.state.hasError){
      return (
      <Fragment>
          <Grid container justify="center" alignItems="center" style={{height: '70vh'}} >
          <Typography>{this.props.error}</Typography>
        </Grid>
      </Fragment>
      )
    }
    return this.props.children;
    
  }
}

const mapStateToProp = (state:IState) => ({
  error: state.shared.error
})

export default connect(mapStateToProp)(ErrorBoundry)


