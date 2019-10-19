import * as React from 'react';
import Grid from "@material-ui/core/Grid";


import './style.css'


export default () => {
  return (
    <div className="card">
      <Grid container className="wrapper">
        <Grid item>
          <div className="animate img" />
        </Grid>
        <Grid item>
          <div className="animate title" />
          <Grid container>
            <div className="animate text" />
            <div className="animate text" />
          </Grid>
          <Grid container>
            <div className="animate btn" />
            <div className="animate btn" />
          </Grid>
        </Grid>
      </Grid>
      <Grid direction="column" container>
        <div className="text w30 animate" />
        <div className="text w100 animate" />
        <div className="text w100 animate" />
        <div className="text w100 animate" />
        <Grid container justify="flex-start">
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item animate" />
          </Grid>
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item animate" />
          </Grid>
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item animate" />
          </Grid>
          <Grid xs={12} md={3} style={{ padding: 2 }}>
            <div className="card-item animate" />
          </Grid>
        </Grid>
        <div className="graph animate" />
      </Grid>
    </div>
  );
};
