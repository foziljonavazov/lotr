import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const stringFormatter = (str) =>
  str
    .toLowerCase()
    .replace(/:/g, '&#58;')
    .replace(/'/g, '&#39;')
    .replace(/\s+/g, '_');

    return (
      <div className="movies-list">
        <div className="movie">
        <h2>{this.props.name}</h2>
        <img src={this.props.poster} alt={stringFormatter(this.props.name)} />
        <h3>Chiqarilgan sanasi: {this.props.date}</h3>
        <h3>Davomiyligi: {this.props.duration}</h3>
        <h3>Byudjet: {this.props.budget}</h3>
        <h3>Daromadi: {this.props.box_office}</h3>
        <h3>
          
          <a href={this.props.full_info} target="_blank" rel="noreferrer">
          To'liq ma'lumot
          </a>
        </h3>
      </div>
      </div>
    );
  }
}
