import React from 'react';
import Grid from "@material-ui/core/Grid"
import {NavLink} from "react-router-dom"
import "./style.css"
interface IProps {

}
const Nav: React.FC<IProps> = (props) => {
    return (
        <div className="nav-card ">
            <Grid container className="wrapper" >
                <Grid item>
                    <NavLink to="/" className="link">Home</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to="#" className="link">Ranking</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to="#" className="link">Tools</NavLink>
                </Grid>
                <Grid item>
                    <NavLink to="#" className="link">Blog</NavLink>
                </Grid>
            </Grid>
        </div>
    )
} 


export default Nav