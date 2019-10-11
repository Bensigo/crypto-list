import React from "react"

import "./style.css"


export default () => {
    const times = new Array(20).fill(0);
    const Headers = () => {
      return (
        <div className="wrapper-sekleton ">
          <div className="title">#</div>
          <div className=" title name ">Name</div>
          <div className="title number ">Price</div>
          <div className="title number">%Change(1hr)</div>
          <div className=" title number">Market cap</div>
          <div className="title">Price graph</div>
        </div>
      );
    };
    const Item = (i: number) => (
      <div className="wrapper-sekleton " key={i}>
        <div className="sn">{i + 1}.</div>
        <div className="item animate " />
        <div className="item animate " />
        <div className="item animate " />
        <div className="item animate " />
        <div className="item animate graph " />
      </div>
    );
    return (
      <React.Fragment>
        <div className="card-skeleton">
          <Headers />
          {times.map((i, index) => Item(index))}
        </div>
      </React.Fragment>
    );
}